import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default LoginLayout;