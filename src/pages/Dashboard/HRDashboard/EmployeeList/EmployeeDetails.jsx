import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EmployeeDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div className='mt-5 ml-5'>
            <h1>Employee details : {user.name}</h1>
        </div>
    );
};

export default EmployeeDetails;