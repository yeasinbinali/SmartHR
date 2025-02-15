import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from '../../../../providers/AuthProvider';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import Swal from 'sweetalert2';
import useWorksheet from '../../../../hooks/useWorksheet';

const WorksheetForm = () => {
    const { user } = useContext(authContext);
    const { register, handleSubmit, setValue, reset } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosPrivate();
    const [, refetch] = useWorksheet();

    useEffect(() => {
        // Initialize the date value in the form
        setValue("date", startDate);
    }, [setValue, startDate]);

    const onSubmit = (data) => {
        const name = user?.displayName;
        const email = user?.email;
        const task = data.task;
        const workHoured = data.workHoured;
        const date = data.date;
        const worksheet = {
            name,
            email,
            task,
            workHoured,
            date
        }
        axiosSecure.post('/worksheet', worksheet)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your worksheet added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
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
    };

    // Handle date change
    const handleDateChange = (date) => {
        setStartDate(date);
        setValue("date", date);
    };
    return (
        <div className='mb-10'>
            <PrivateContainerHeader title="Add your work"></PrivateContainerHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='w-full mx-auto'>
                        <label>Tasks</label><br />
                        <select required className='border-[1px] border-black w-[100%]' {...register("task")}>
                            <option value="Sales">Sales</option>
                            <option value="Support">Support</option>
                            <option value="Content">Content</option>
                            <option value="Paperwork">Paperwork</option>
                        </select>
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Work hours</label><br />
                        <select required className='border-[1px] border-black w-[100%]' {...register("workHoured")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className='w-full mx-auto'>
                        <label>Date</label><br />
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={handleDateChange}
                            className='border-[1px] border-black w-[100%]'
                        />
                        <input type="hidden" {...register("date")} value={startDate} />
                    </div>
                </div>
                <input className='btn bg-primary text-white w-full py-2 mt-5 cursor-pointer' type="submit" />
            </form>
        </div>
    );
};

export default WorksheetForm;