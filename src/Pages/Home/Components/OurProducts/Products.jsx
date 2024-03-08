import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";



const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product);
    const fewProduct = product.slice(0, 6)
    console.log(fewProduct);
    return (
        <div className="mt-20 w-9/12 mx-auto">
            <div className="font-bold text-5xl text-center mb-16 ">
                <p>Our  <span className="text-orange-500"> Products</span> </p>
            </div>
            <Slide direction="left">
                <div className="grid grid-cols-3 pl-16 mt-10 ">
                    {
                        fewProduct.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="card  w-96 bg-base-100 ">
                                    <figure><img className="h-36" src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="font-bold text-2xl text-center">{item.name}</h2>
                                        <h2 className="font-semibold text-center text-xl">${item.price}</h2>
                                        
                                        <div className="card-actions justify-center">
                                            <Link to={`/${item._id}`}><button className="btn btn-outline btn-success px-10">Details</button></Link>
                                        </div>
                                    </div>
                                </div></SwiperSlide>))
                    }
                </div>
            </Slide>
            <div className="flex justify-center mt-5">
                <Link to={'/allProducts'}><button className="btn btn-success btn-outline">All Our Products</button></Link>
            </div>
        </div>
    );
};

export default Products;