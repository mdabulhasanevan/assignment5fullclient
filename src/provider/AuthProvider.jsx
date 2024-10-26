import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../public/firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export const AuthContextLogin = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

 
  const auth = getAuth(app);
  //const [user, setUser] = useState(null);
  // Login with email
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Register with email and send data to backend
  const registerWithEmail = async (
    email,
    password,
    name,
    phone,
    photo,
    address
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      // Send user data to backend
      const response = await fetch(
        "${configURL.baseUrl}/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: newUser.uid,
            email: newUser.email,
            displayName: name || "User",
            phone: phone,
            photoUrl: photo || "https://i.ibb.co/k6hTYW1/Alien-Dev.jpg",
            address: address,
            isAdmin: false, // Default role
            isBlocked: false, // Default status
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user data.");
      }

      return newUser;
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error; // Re-throw error for further handling if needed
    }
  };

  // Logout user
  const logOutUser = async () => {
    //const navigate = useNavigate(); // Initialize useNavigate
    await signOut(auth); // Wait for sign out to complete
    
    //navigate('/login');
    
    }
  // Monitor auth state and fetch user data from backend
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const res = await fetch(
            `${configURL.baseUrl}/user/${currentUser.uid}`
          );

          if (!res.ok) {
            throw new Error("Failed to fetch user data.");
          }

          const data = await res.json();
          setUser(data);
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthContextLogin.Provider
      value={{ registerWithEmail, setUser, user,  loginWithEmail, logOutUser }}
    >
      {children}
    </AuthContextLogin.Provider>
  );
};

export default AuthProvider;