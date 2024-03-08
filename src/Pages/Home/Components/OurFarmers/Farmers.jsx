import { Slide } from "react-awesome-reveal";


const Farmers = () => {
    return (
        <div className="mt-10">
            <Slide direction="up"><div className="w-9/12 mx-auto">
                <div className=" text-center mb-16 ">
                    <p className="font-bold text-5xl mb-4">Our Farm Land <span className="text-orange-500"> farmers</span> </p>
                    <p className="w-6/12 mx-auto text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quibusdam dolores doloribus unde eius sit eligendi consequatur culpa repellat quia.</p>
                </div>
            </div></Slide>
            <div className="w-9/12 mx-auto flex justify-evenly">
                <Slide direction="right"><div className="card w-96 bg-base-100 ">
                    <figure><img src="https://i.ibb.co/svrbzQ2/tm2-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-bold">Mostakin Ahamed</h2>
                        <p className="font-semibold ">CEO/Managing Director</p>
                    </div>
                </div></Slide>
                <Slide direction="up">
                    <div className="card w-96 bg-base-100 ">
                        <figure><img src="https://i.ibb.co/Sw3q6XN/tm2-2.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-3xl font-bold">Koushik Rahaman</h2>
                            <p className="font-semibold ">Manger</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction="down">
                    <div className="card w-96 bg-base-100 ">
                        <figure><img src="https://i.ibb.co/qnqCwfw/tm2-3.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-3xl font-bold">Atia Ruksana</h2>
                            <p className="font-semibold ">Organic Farmer</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction="left">
                    <div className="card w-96 bg-base-100 ">
                        <figure><img src="https://i.ibb.co/52Cw2Rb/tm2-4.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-3xl font-bold">Minhazur Rahaman</h2>
                            <p className="font-semibold ">Agriculturist</p>
                        </div>
                    </div>
                </Slide>

            </div>

        </div>
    );
};

export default Farmers;