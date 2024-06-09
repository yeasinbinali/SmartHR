import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EmployeeSalary = () => {
    const user = useLoaderData();
    return (
        <div className='mt-5 ml-5'>
            <h1>Salary changes: {user.name}</h1>
        </div>
    );
};

export default EmployeeSalary;