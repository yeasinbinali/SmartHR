import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = 'd4f75cbd1e84a7835c536036c7e5f01b';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(authContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        const imageFile = { image: data.photo[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        const imageURL = res.data.data.display_url;

        const role = data.role;
        const name = data.name;
        const bankAccount = data.bankAccount;
        const designation = data.designation;
        const salary = data.salary;
        const status = 'Not verified';
        const fired = false

        const userData = { role, name, imageURL, bankAccount, email, designation, salary, status, fired }

        createUser(email, password)
            .then(res => {
                axiosPublic.post('/users', userData)
                    .then(res => {
                        updateUserProfile(name, imageURL)
                            .then(() => { })
                        if (res.data.acknowledged) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Register successfully",
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
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${error.message}`
                });
            })
    }

    return (
        <div className='mt-10 my-20 md:w-[80%] mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10'>Register</h1>
                <div className='md:grid grid-cols-2 gap-5'>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Role</label><br />
                        <select required className='border-[1px] border-black w-[100%]' {...register("role")}>
                            <option value="Employee">Employee</option>
                            <option value="HR">HR</option>
                            <option disabled value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Full name</label><br />
                        <input required placeholder='Your name' type='text' className='border-[1px] border-black w-[100%]' {...register("name")} />
                    </div>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Bank Account No</label><br />
                        <input required placeholder='Your bank account' type='number' className='border-[1px] border-black w-[100%]' {...register("bankAccount", {
                            maxLength: 6,
                            minLength: 5
                        })} />
                        {errors.bankAccount?.type === "maxLength" && <p>Max length 6</p>}
                        {errors.bankAccount?.type === "minLength" && <p>Min length 5</p>}
                    </div>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Salary</label><br />
                        <input required placeholder='Your Salary' type='number' className='border-[1px] border-black w-[100%]' {...register("salary")} />
                    </div>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Photo</label><br />
                        <input required placeholder='Your Photo' type='file' className='border-[1px] border-black w-[100%]' {...register("photo")} />
                    </div>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Designation</label><br />
                        <select required className='border-[1px] border-black w-[100%]' {...register("designation")}>
                            <option value="Sales assistant">Sales assistant</option>
                            <option value="Social media executive">Social media executive</option>
                            <option value="Digital marketer">Digital marketer</option>
                        </select>
                    </div>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Email</label><br />
                        <input required placeholder='Write your email' type='email' className='border-[1px] border-black w-[100%]' {...register("email")} />
                    </div>
                    <div className='w-full mx-auto mb-5 md:mb-0'>
                        <label>Password</label><br />
                        <input required placeholder='Write your password' type='password' className='border-[1px] border-black w-[100%]' {...register("password", {
                            minLength: 6,
                            pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                        })} />
                        {errors.password?.type === "minLength" && <p>Password must be 6 characters</p>}
                        {errors.password?.type === "pattern" && <p>Password must have one capital letter and one special character(!, @, #, %, &, *)</p>}
                    </div>
                </div>
                <input className='btn bg-primary text-white w-full py-2 mt-5 cursor-pointer' type="submit" />
            </form>
            <p className='my-5 text-center'>Already have an account ? <Link className='text-main' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;