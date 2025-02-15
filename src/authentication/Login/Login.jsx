import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useUsersData from '../../hooks/useUsersData';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signInUser, googleSignIn } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const [users] = useUsersData();

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        const specificUserArray = users.filter(user => user.email === email);
        const specificUser = specificUserArray[0];
        if (specificUser?.fired) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have been fired. So you can no longer login!"
            });
        } else {
            signInUser(email, password)
                .then(res => {
                    navigate(location?.state ? location.state : '/');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login successfully done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${error.message}`
                    });
                })
        }
    }

    const handleGoogleSignIn = () => {
        const role = 'Employee';
        const designation = 'Sales assistant';
        const status = 'Not verified';
        const salary = 10000;
        const bankAccount = 12345;
        googleSignIn()
            .then(res => {
                const googleUser = res.user;
                const email = googleUser.email;
                const name = googleUser.displayName;
                const imageURL = googleUser.photoURL;

                const userData = { role, name, imageURL, bankAccount, email, designation, salary, status };
                axiosPublic.post('/users', userData)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Google login successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        navigate('/');
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            footer: `${error.message}`
                        });
                    })
            })
    }

    return (
        <div className='md:flex justify-between items-center gap-10 mt-10 mb-20'>
            <div className='md:w-[40%] mx-auto'>
                <img src="https://i.ibb.co/1rHpdYk/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt="" />
            </div>
            <div className='md:w-[50%] mx-auto md:px-20'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10'>Login</h1>
                    <div className='w-full mx-auto'>
                        <label>Email</label><br />
                        <input placeholder='Write your email' type='email' className='border-[1px] border-black w-[100%]' {...register("email")} required />
                    </div>
                    <div className='w-full mx-auto mt-5'>
                        <label>Password</label><br />
                        <input placeholder='Write your password' type='password' className='border-[1px] border-black w-[100%]' {...register("password")} required />
                    </div>
                    <input className='btn bg-primary text-white w-full py-2 mt-5 cursor-pointer' type="submit" />
                </form>
                <p className='my-5 text-center'>New to SmartHR ? <Link className='text-main' to='/register'>Go to Register</Link></p>
                <div onClick={handleGoogleSignIn} className='flex items-center bg-gray-200 p-2 cursor-pointer'>
                    <FcGoogle className='text-2xl float-left' />
                    <p className='text-center w-full mx-auto'>Google sign-in</p>
                </div>
            </div>
        </div>
    );
};

export default Login;