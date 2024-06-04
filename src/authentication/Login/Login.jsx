import React from 'react';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='flex justify-between items-center gap-10 mt-10 mb-20'>
            <div className='w-[40%] mx-auto'>
                <img src="https://i.ibb.co/1rHpdYk/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt="" />
            </div>
            <div className='w-[50%] mx-auto px-20'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-5xl font-bold text-center mb-10'>Login</h1>
                    <div className='w-full mx-auto'>
                        <label>Email</label><br />
                        <input placeholder='Write your email' type='email' className='border-2 border-[whitesmoke] w-[100%]' {...register("email")} />
                    </div>
                    <div className='w-full mx-auto mt-5'>
                        <label>Password</label><br />
                        <input placeholder='Write your password' type='password' className='border-2 border-[whitesmoke] w-[100%]' {...register("password")} />
                    </div>
                    <input className='btn bg-primary text-white w-full py-2 mt-5' type="submit" />
                </form>
                <p className='my-5 text-center'>New to SmartHR ? <Link className='text-main' to='/register'>Go to Register</Link></p>
                <div className='flex justify-center'>
                    <FcGoogle className='text-3xl' />
                </div>
            </div>
        </div>
    );
};

export default Login;