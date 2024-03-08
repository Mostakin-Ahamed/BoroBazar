import { Slide } from "react-awesome-reveal";


const Reviews = () => {
    return (
        <div className="mt-40" style={{ backgroundImage: 'url("https://i.ibb.co/1Xk0s49/h5-bg-testimonial1.png")' }}>
            <div className="w-9/12 mx-auto flex justify-evenly">
                <Slide direction="right">
                    <div>
                        <img src="https://i.ibb.co/bRcwrMy/h5-testimonial-banner.png" alt="" />
                    </div>
                </Slide>
                <div>
                    <Slide direction="left">
                    <div className="font-bold text-5xl text-left mb-16 ">
                        <p>What Our Clients  <span className="text-orange-500"> <br /> Saying</span> </p>
                    </div>
                    </Slide>

                </div>
            </div>
        </div>
    );
};

export default Reviews;