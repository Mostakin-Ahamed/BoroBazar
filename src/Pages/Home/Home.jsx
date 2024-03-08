import { Helmet } from "react-helmet-async";
import Banner from "./Components/Banner/Banner";
import Carousel from "./Components/Carousel";
import Discount from "./Components/Discount";

import SpecialFeature from "./Components/SpecialFeatures/SpecialFeature";
import Products from "./Components/OurProducts/Products";
import CountDown from "./Components/CountDown/CountDown";
import Farmers from "./Components/OurFarmers/Farmers";
import Reviews from "./Components/ClientReview/Reviews";
import ContactUs from "./Components/Contact/ContactUs";


// import Carousel1 from "./Components/Carousel1";

const Home = () => {
    return (
        <div className="w-full mx-auto">
            <Helmet><title>Home || BoroBazar</title></Helmet>
            <Banner></Banner>
            <SpecialFeature></SpecialFeature>
            <Carousel></Carousel>
            <Discount></Discount>
            <Products></Products>
            <CountDown></CountDown>
            <Farmers></Farmers>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;