import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




const PublicLayout = () => {
    return (
        <div className="container mx-auto w-3/4">
            <Navbar />
            
            <Outlet />
            
            <Footer />   

        </div>
    );
};

export default PublicLayout;