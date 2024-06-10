import React from 'react';
import contactImage from '../../assets/contact.png';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosPublic();
    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const message = data.message;

        const messageData = { name, email, message };

        axiosSecure.post('/message', messageData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your message has been sent to Admin, Stay with us!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                }
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
        <div className='md:flex justify-between items-center gap-10 mt-10 mb-20'>
            <img className='md:w-[50%]' src={contactImage} alt="contact" />
            <div className='md:w-[50%]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-5 md:mt-0 md:mb-10'>Contact with <span className='text-main border-b-4 border-primary font-bold'>Admin</span></h1>
                    <div className='w-full mx-auto mt-5'>
                        <label>To</label><br />
                        <input placeholder='smart@admin.com' readOnly type='email' className='border-[1px] border-black w-[100%]' required />
                    </div>
                    <div className='w-full mx-auto mt-5'>
                        <label>Full Name</label><br />
                        <input placeholder='Write your name' type='text' className='border-[1px] border-black w-[100%]' {...register("name")} required />
                    </div>
                    <div className='w-full mx-auto mt-5'>
                        <label>Email</label><br />
                        <input placeholder='Write your email' type='email' className='border-[1px] border-black w-[100%]' {...register("email")} required />
                    </div>
                    <div className='w-full mx-auto mt-5'>
                        <label>Your message / opinion</label><br />
                        <textarea placeholder='Write your message' type='text' className='border-[1px] border-black w-[100%]' {...register("message")} required />
                    </div>
                    <input className='btn bg-primary text-white w-full py-2 mt-5' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;