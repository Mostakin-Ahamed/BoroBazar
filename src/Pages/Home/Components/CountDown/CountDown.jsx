

const CountDown = () => {
    return (
        <div className="mt-16 max-h-[700px] border border-red-600" style={{ backgroundImage: 'url("https://i.ibb.co/cNPRgBs/deal-bg2.jpg")' }}>
            <div className="w-8/12 mx-auto py-56">
                <div className=" text-white text-left mb-16 ">
                    <p className="font-bold text-5xl pb-10">Deals Of The <span className="text-orange-500"> Week!</span> </p>
                    <p>BoroBazar is a design studio founded in London. Nowadays, we’ve grown and <br/> expanded our services, and have become a multinational firm.</p>
                </div>
                <div className="text-white">
                    <div className="flex gap-5">
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 11 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
                <div>
                    <button className='w-[257px] absolute h-[55px] bg-[#FE7E41] mt-9 font-semibold text-base text-white spacing-5'>Shop Now!</button>
                    
                </div>
            </div>
        </div>
    );
};

export default CountDown;