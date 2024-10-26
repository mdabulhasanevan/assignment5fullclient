import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginLayout = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default LoginLayout;