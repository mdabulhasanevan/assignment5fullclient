import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../public/firebase/firebase.config";

export const AuthContextLogin = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, SetUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();


    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            SetUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <AuthContextLogin.Provider value={{ loginWithGoogle, user, logOutUser }}>
                {children}
            </AuthContextLogin.Provider>

        </>
    );
};

export default AuthProvider;