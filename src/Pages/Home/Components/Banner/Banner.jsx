
import './Banner.css'
const Banner = () => {
    return (
        <div >
            <div className='mt-16 ml-48'>

                <div id='header-text' className='w-8/12'>
                    <p>Get your top quality organic foods online today!<br /> </p>
                </div>
                <div className='lg:flex justify-between '>
                    <div>
                        <div className='mt-4'>
                            <div>
                                <div id='support-text' className='flex gap-8'>
                                    <div className='flex justify-evenly'>
                                        <img className='mr-3' src="/public/Group.svg" alt="" />
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
                                    <button className='w-[257px] absolute h-[55px] bg-[#FE7E41] mt-9 font-semibold text-base text-white spacing-5'>See Our Packages</button>
                                    <button className='static w-[257px] h-[55px] border-solid border-2 mt-12 ml-5 border-black'></button>
                                </div>
                                <div >
                                    <img src="/Union.svg" className='static ml-[315px] lg:ml-72 -mt-7 mb-7' alt="" />
                                </div>
                            </div>
                            <div className=''>
                                <img src="/Icon.svg" className='mt-20 hidden lg:block' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='pr-10 lg:mr-44 ml-11' >
                        <img className='lg:h-[480px] lg:w-[718px] object-cover mb-20' src="/banner.jpg" alt="" />
                        <img className='absolute ml-44 -mt-64 lg:ml-80 lg:-mt-[350px]' src="/Play video.svg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;