import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center gap-10 mt-16 mb-20'>
            <div className='w-full'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl'><span className='font-bold'>The Processes more</span> important from <span className='text-main border-b-4 border-primary font-bold'>SmartHR</span> Here!</h1>
                <p className='my-8'>SmartHR is a cloud-based Human Resource Management System (HRMS) designed to streamline and automate various HR processes, making it easier for companies to manage employee information, payroll, benefits, and compliance.</p>
                <div>
                    <p className='mb-5 text-2xl'>Get started for free</p>
                    <form>
                        <input placeholder='Enter your email address...' className='w-80 border-2 border-[whitesmoke]' type="email" name="email" />
                        <input className='btn bg-primary text-secondary px-10 py-2 mt-3 lg:mt-0 lg:-ml-10' type="button" value="Get Started" />
                    </form>
                </div>
            </div>
            <div className='w-full mt-16 md:mt-0'>
                <img src="https://i.ibb.co/svknFCZ/home3.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;