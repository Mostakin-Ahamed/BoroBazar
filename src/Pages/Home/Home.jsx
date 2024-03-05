import Banner from "./Components/Banner/Banner";
import Carousel from "./Components/Carousel";
// import Carousel1 from "./Components/Carousel1";

const Home = () => {
    return (
        <div className="w-9/12 mx-auto">
            <Banner></Banner>
            {/* <Carousel1></Carousel1> */}
            <Carousel></Carousel>
            
        </div>
    );
};

export default Home;