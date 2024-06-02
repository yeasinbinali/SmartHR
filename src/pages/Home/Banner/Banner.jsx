import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center gap-10 my-20'>
            <div>
                <h1 className='text-5xl'><span className='font-bold'>The Processes more</span> important from <span className='text-main border-b-4 border-primary font-bold'>SmartHR</span> Here!</h1>
                <div>
                    <p className='mt-10 mb-5 text-2xl'>Get started for free</p>
                    <form>
                        <input placeholder='Enter your email address...' className='w-80 border-2 border-[whitesmoke] rounded-full' type="email" name="email" />
                        <input className='btn bg-primary text-secondary px-10 py-2 -ml-10 rounded-full' type="button" value="Get Started" />
                    </form>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/svknFCZ/home3.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;