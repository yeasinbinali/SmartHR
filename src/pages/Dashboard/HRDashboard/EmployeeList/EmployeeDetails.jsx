import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const EmployeeDetails = () => {
    const user = useLoaderData();
    return (
        <div className='mt-5 ml-5 mb-20'>
            <div className='flex items-center bg-[whitesmoke] p-5 rounded-2xl'>
                <img className='w-16 h-16 object-cover rounded-2xl mr-3' src={user.imageURL} alt="image" />
                <div>
                    <h2 className='text-xl font-bold'>{user.name}</h2>
                    <p>{user.designation}</p>
                </div>
            </div>
            <div className='mt-10'>
                <BarChart width={350} md:width={600} height={300}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default EmployeeDetails;