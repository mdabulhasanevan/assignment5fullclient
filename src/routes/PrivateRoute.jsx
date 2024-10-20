import { useContext } from "react";
import {  AuthContextLogin } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContextLogin);
  if (user) {
    return children;
  }
  return navigate("/login");
};

export default PrivateRoute;
