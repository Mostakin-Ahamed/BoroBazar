import './Popular.css';

const Popular = () => {
    return (
        <div className="mt-16 mb-6" >
            <div className="font-bold text-5xl text-left mb-11 ">
                <p>Our Popular <span className="text-orange-500"> Category</span> </p>

            </div>
            <div className=" flex gap-2 justify-evenly   ">
                <div className="card relative popular w-2/12 bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="/h5-icon1.png" alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vegetables</h2>
                    </div>
                </div>
                <div className="card popular w-2/12 bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="/h5-icon2.png" alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fruit</h2>
                    </div>
                </div>
                <div className="card popular w-2/12 bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="/h5-icon3.png" alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dried</h2>
                    </div>
                </div>
                <div className="card popular w-2/12 bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="/h5-icon4.png" alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Juice</h2>
                    </div>
                </div>
                <div  className="card popular w-2/12 bg-base-100  ">
                    <figure className="px-10 pt-10">
                        <img src="/h5-icon5.png" alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salad</h2>
                    </div>
                </div>
                <div className="card popular w-2/12 bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="/h5-icon6.png" alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Organic</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;