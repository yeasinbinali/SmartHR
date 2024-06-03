import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center gap-10 mt-16 mb-20'>
            <div className='w-full'>
                <h1 className='text-5xl'><span className='font-bold'>The Processes more</span> important from <span className='text-main border-b-4 border-primary font-bold'>SmartHR</span> Here!</h1>
                <p className='my-8'>SmartHR is a cloud-based Human Resource Management System (HRMS) designed to streamline and automate various HR processes, making it easier for companies to manage employee information, payroll, benefits, and compliance.</p>
                <div>
                    <p className='mb-5 text-2xl'>Get started for free</p>
                    <form>
                        <input placeholder='Enter your email address...' className='w-80 border-2 border-[whitesmoke]' type="email" name="email" />
                        <input className='btn bg-primary text-secondary px-10 py-2 -ml-10' type="button" value="Get Started" />
                    </form>
                </div>
            </div>
            <div className='w-full'>
                <img src="https://i.ibb.co/svknFCZ/home3.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;