import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/slider";


const PublicLayout = () => {
    return (
        <div>
            <Navbar />
            <Slider/>
            <Outlet />
            <Footer />   

        </div>
    );
};

export default PublicLayout;