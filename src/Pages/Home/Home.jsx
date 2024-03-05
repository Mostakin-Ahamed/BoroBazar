import { Helmet } from "react-helmet-async";
import Banner from "./Components/Banner/Banner";
import Carousel from "./Components/Carousel";
import Discount from "./Components/Discount";
// import Carousel1 from "./Components/Carousel1";

const Home = () => {
    return (
        <div className="w-9/12 mx-auto">
            <Helmet><title>Home</title></Helmet>
            <Banner></Banner>
            {/* <Carousel1></Carousel1> */}
            <Carousel></Carousel>
            <Discount></Discount>
            
        </div>
    );
};

export default Home;