import { Helmet } from "react-helmet-async";
import Banner from "./Components/Banner/Banner";
import Carousel from "./Components/Carousel";
import Discount from "./Components/Discount";
import { Link } from "react-router-dom";
import SpecialFeature from "./Components/SpecialFeatures/SpecialFeature";
// import Carousel1 from "./Components/Carousel1";

const Home = () => {
    return (
        <div className="w-9/12 mx-auto">
            <Helmet><title>Home || BoroBazar</title></Helmet>
            <Banner></Banner>
            <SpecialFeature></SpecialFeature>
            <Carousel></Carousel>
            <Discount></Discount>
            <Link to={'/allProducts'}><button>All Products</button></Link>
            
        </div>
    );
};

export default Home;