import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";




const BestDeals = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    // const popular = products.filter(product => (product.price < 50) && (product.price > 20))
 
    return (
        <div className="my-16 max-h-[900px]">
            <Slide direction="down">
            <div className="font-bold text-5xl text-center mb-11 ">
                <p>All Our  <span className="text-orange-500"> Products</span> </p>

            </div>
            </Slide>
            <Slide direction="up" duration={1000} className="my-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        products.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img className="h-36" src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-center">
                                            <Link to={`/${item._id}`}><button className="btn bg-[#96ECB4]">Details</button></Link>
                                        </div>
                                    </div>
                                </div></SwiperSlide>))
                    }


                </Swiper>
            </Slide>


        </div>
    );
};

export default BestDeals;