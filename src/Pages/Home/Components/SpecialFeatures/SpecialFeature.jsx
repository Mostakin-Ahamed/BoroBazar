import { Slide } from "react-awesome-reveal";


const SpecialFeature = () => {
    return (
        <div className="mt-16 mb-16">
            <div className="font-bold text-6xl text-center mb-11 ">
                <p>Our Special <span className="text-orange-500"> Features</span> </p>
            </div>
            <div className="flex justify-evenly mx-auto">
                <Slide direction="right">
                    <div className="card w-96 bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src="/src/assets/ft-icon1.png" alt="Shoes" className="rounded-xl h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h1 className="card-title">Fresh Organic Vegetable</h1>
                            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates aliquam maxime voluptate nisi nihil cum!</p>
                            <div className="card-actions mt-5">
                                <button className="btn outline font-bold outline-green-600">Learn More</button>
                            </div>
                        </div>
                    </div>
                </Slide>
                <div className="card w-96 bg-base-100 static ">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/ft-icon2.png" alt="Shoes" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="card-title">Fast & Easy Grocery Delivery</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste ullam quos unde, alias harum!</p>
                        <div className="card-actions mt-5 ">
                            <button className="btn outline font-bold outline-green-600">Learn More</button>
                        </div>
                    </div>
                </div>
                <Slide direction="left">
                    <div className="card w-96 bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src="/src/assets/ft-icon3.png" alt="Shoes" className="rounded-xl h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h1 className="card-title">Very Easy Payment System</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sed ratione provident minima quidem omnis.</p>
                            <div className="card-actions mt-5">
                                <button className="btn font-bold outline outline-green-600">Learn More</button>
                            </div>
                        </div>
                    </div>
                </Slide>

            </div>
        </div>
    );
};

export default SpecialFeature;