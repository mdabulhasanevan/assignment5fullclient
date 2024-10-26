import { useContext } from "react";
import {  AuthContextLogin } from "../provider/AuthProvider";
import {   useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  
    const { user } = useContext(AuthContextLogin);
   // const location = useLocation();

   const navigate=useNavigate();
  
    if (user) {
      return children;
    }
  
    // Redirect to login page and pass the original location to return after login
    return  navigate("/login");
  
};

export default PrivateRoute;
