import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider';

// const image_hosting_key = 'd4f75cbd1e84a7835c536036c7e5f01b';
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const { createUser } = useContext(authContext);

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    
    return (
        <div className='mt-10 my-20'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-5xl font-bold text-center mb-10'>Register</h1>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='w-full mx-auto'>
                        <label>Role</label><br />
                        <select required className='border-2 border-[whitesmoke] w-[100%]' {...register("role")}>
                            <option value="Employee">Employee</option>
                            <option value="HR">HR</option>
                            <option disabled value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Bank Account No</label><br />
                        <input required placeholder='Your bank account' type='text' className='border-2 border-[whitesmoke] w-[100%]' {...register("bankAccount")} />
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Salary</label><br />
                        <input required placeholder='Your Salary' type='number' className='border-2 border-[whitesmoke] w-[100%]' {...register("salary")} />
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Photo</label><br />
                        <input required placeholder='Your Photo' type='file' className='border-2 border-[whitesmoke] w-[100%]' {...register("photo")} />
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Designation</label><br />
                        <select required className='border-2 border-[whitesmoke] w-[100%]' {...register("designation")}>
                            <option value="Sales assistant">Sales assistant</option>
                            <option value="Social media executive">Social media executive</option>
                            <option value="Digital marketer">Digital marketer</option>
                        </select>
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Email</label><br />
                        <input required placeholder='Write your email' type='email' className='border-2 border-[whitesmoke] w-[100%]' {...register("email")} />
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Password</label><br />
                        <input required placeholder='Write your password' type='password' className='border-2 border-[whitesmoke] w-[100%]' {...register("password", {
                            minLength: 6,
                            pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                        })} />
                        {errors.password?.type === "minLength" && <p>Password must be 6 characters</p>}
                        {errors.password?.type === "pattern" && <p>Password must have one capital letter and one special character(!, @, #, %, &, *)</p>}
                    </div>
                </div>
                <input className='btn bg-primary text-white w-full py-2 mt-5' type="submit" />
            </form>
            <p className='my-5 text-center'>Already have an account ? <Link className='text-main' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;