import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Faq from "../components/Faq";
import Slider from "../components/slider";
import ProductFeaturesBestProduct from "../components/ProductFeaturesBestProduct";
import Categories from "./Categories ";


const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>Home | Page</title>
            </Helmet>
            <Slider/>
            <Categories/>
            <ProductFeaturesBestProduct/>
            <Faq/>
        </div>
    );
};

export default Home;