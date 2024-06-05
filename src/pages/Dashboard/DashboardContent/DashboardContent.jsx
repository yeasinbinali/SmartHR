import React from 'react';
import useUsersData from '../../../hooks/useUsersData';

const DashboardContent = () => {
    const [users] = useUsersData();
    return (
        <div className='mt-5 ml-5'>
            <h1>Hello {users.name}</h1>
        </div>
    );
};

export default DashboardContent;