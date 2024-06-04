import React from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import DashboardContent from '../DashboardContent/DashboardContent';

const Dashboard = () => {
    return (
        <div className='flex'>
            <DashboardSidebar></DashboardSidebar>
            <DashboardContent></DashboardContent>
        </div>
    );
};

export default Dashboard;