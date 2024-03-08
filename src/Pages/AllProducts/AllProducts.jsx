import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

const BestDeals = () => {
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch('https://boro-bazar-server.vercel.app/items')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const numberOfPages = Math.ceil(products.length / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0); // Reset to first page when changing items per page
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;

    return (
        <div className="my-16 mb-10 w-9/12 mx-auto max-h-[900px]">
            <Slide direction="down">
                <div className="font-bold text-5xl text-center mb-11 ">
                    <p>All Our  <span className="text-orange-500"> Products</span> </p>
                </div>
            </Slide>
            <Slide direction="left">
                <div className="grid grid-cols-3 pl-16 mt-10 ">
                    {products.slice(startIndex, endIndex).map(item => (
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
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Slide>
            <div className="pagination flex justify-center">
                {pages.map(page => (
                    <button key={page} className="btn" onClick={() => setCurrentPage(page)}>
                        {page + 1}
                    </button>
                ))}
                <div className="ml-10 mb-10">
                    <p>Items per page</p>
                    <select className="ml-5 border border-black rounded-lg" value={itemsPerPage} onChange={handleItemsPerPage}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default BestDeals;
