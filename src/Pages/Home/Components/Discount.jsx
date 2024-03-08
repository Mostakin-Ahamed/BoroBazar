import { Slide } from "react-awesome-reveal";


const Discount = () => {
    return (
        <div className="lg:flex w-full justify-center  mt-14  gap-52 my-14">
            <Slide direction="left">
                <img src="/src/assets/offer1.png" alt="7" border="0" />

            </Slide>
            <Slide direction="right">
                <img src="/src/assets/offer2.png" alt="6" border="0" />
            </Slide>

        </div>
    );
};

export default Discount;