import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';
import { useForm } from 'react-hook-form';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import Swal from 'sweetalert2';

const EmployeeSalary = () => {
    const user = useLoaderData();
    const { register, handleSubmit } = useForm();
    console.log(user);
    const axiosSecure = useAxiosPrivate();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const previousSalary = parseInt(user.salary);
        const newSalary = parseInt(data.salary);
        const userID = user._id;
        if (newSalary < previousSalary) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Updated salary is greater than current salary"
            });
        } else {
            axiosSecure.patch(`/users/${userID}/salary`, data)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Salary updated successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    navigate('/dashboard/allEmployees')
                })
        }
    }

    return (
        <div className='mt-5 ml-5 mb-20'>
            <PrivateContainerHeader title={`${user.name}'s current salary $${user.salary}`}></PrivateContainerHeader>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[whitesmoke] w-[100%] md:w-[50%] lg:w-[100%] py-10 px-10 lg:px-16'>
                <div className='w-full mx-auto'>
                    <label>Full name</label>
                    <input required placeholder={user.name} readOnly className='border-[1px] border-black w-[100%] p-1' />
                </div>
                <div className='w-full mx-auto my-3'>
                    <label>Role</label>
                    <input required placeholder={user.role} readOnly className='border-[1px] border-black w-[100%] p-1' />
                </div>
                <div className='w-full mx-auto'>
                    <label>Salary</label>
                    <input required placeholder='New salary > current salary' className='border-[1px] border-black w-[100%] p-1' type='number' {...register("salary")} />
                </div>
                <input className='btn bg-primary text-white w-full py-2 mt-5 cursor-pointer' type="submit" />
            </form>
        </div>
    );
};

export default EmployeeSalary;