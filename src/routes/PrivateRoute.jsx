import { useContext, useEffect } from "react";
import {  AuthContextLogin } from "../provider/AuthProvider";
import {   useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  
    const { user } = useContext(AuthContextLogin);
   // const location = useLocation();

   const navigate=useNavigate();
   const location = useLocation();
  
   useEffect(() => {
    if (!user) {
        // Redirect to login page and pass the original location to return after login
        navigate("/login", { state: { from: location } });
    }
}, [user, navigate, location]);

// If user is authenticated, render the children
return user ? children : null;
  
};

export default PrivateRoute;
