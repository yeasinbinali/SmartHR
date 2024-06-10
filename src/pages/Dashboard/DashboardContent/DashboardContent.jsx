import React, { useContext } from 'react';
import { authContext } from '../../../providers/AuthProvider';

const DashboardContent = () => {
    const {user} = useContext(authContext);
    return (
        <div className='mt-5 ml-5 mb-20'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Hello <span className='text-main border-b-4 border-primary font-bold uppercase'>{user?.displayName}</span>,</h1>
            <h2 className='text-xl md:text-2xl lg:text-3xl mt-5'>Welcome to SmartHR dashboard</h2>
        </div>
    );
};

export default DashboardContent;