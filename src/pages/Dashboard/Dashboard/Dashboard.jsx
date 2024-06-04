import React from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <DashboardSidebar></DashboardSidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;