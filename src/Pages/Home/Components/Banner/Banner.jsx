
import { Slide } from 'react-awesome-reveal';
import './Banner.css'
const Banner = () => {


    return (
        <div className='w-full' style={{ backgroundImage: 'url("https://i.ibb.co/1Xk0s49/h5-bg-testimonial1.png")' }}>
            <div className='w-9/12 mx-auto' >
                <div className='mt-16 ml-48'>
                    <Slide direction='down'>
                        <div id='header-text' className='w-8/12'>
                            <p>Get your top quality organic foods online today!<br /> </p>
                        </div>
                    </Slide>


                    <div className='lg:flex justify-between '>

                        <Slide direction="right">
                            <div>
                                <div className='mt-4'>
                                    <div>
                                        <div id='support-text' className='flex gap-8'>
                                            <div className='flex justify-evenly'>
                                                <img className='mr-3' src="/Group.svg" alt="" />
                                                <p>24/7 Online Support</p>
                                            </div>
                                            <div className='flex justify-evenly'>
                                                <img className='mr-3' src="/Group.svg" alt="" />
                                                <p>Quick Communication</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[358px] mt-8 text-justify'>
                                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, sunt? Dignissimos, optio ipsa odit distinctio sapiente assumenda dicta aspernatur ullam.</p>
                                    </div>
                                    <div>
                                        <div>
                                            <button className='w-[257px] absolute h-[55px] bg-[#FE7E41] mt-9 font-semibold text-base text-white spacing-5'>See Our Products</button>
                                            <button className='static w-[257px] h-[55px] border-solid border-2 mt-12 ml-5 border-black'></button>
                                        </div>
                                        <div>
                                            <img src="/Union.svg" className='static ml-[315px] lg:ml-72 -mt-7 mb-7' alt="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img src="/Icon.svg" className='mt-20 hidden lg:block' alt="" />
                                    </div>
                                </div>
                            </div>

                        </Slide>
                        <Slide direction="left">
                            <div className='pr-10 lg:mr-44 ml-11 mt-10' >
                                <img className='lg:h-[480px] lg:w-[718px] object-contain mb-20' src="https://i.ibb.co/4NVcNF2/slider-layer2-1.png" alt="" />
                                <img className='absolute ml-44 -mt-64 lg:ml-80 lg:-mt-[250px]' src="https://i.ibb.co/dGchJhk/slider-layer3.png" alt="" />
                                <img className='absolute ml-44 -mt-64 lg:ml-96 lg:-mt-[550px]' src="https://i.ibb.co/J2qR4TR/slider-layer6.png" alt="" />
                            </div>
                        </Slide>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;