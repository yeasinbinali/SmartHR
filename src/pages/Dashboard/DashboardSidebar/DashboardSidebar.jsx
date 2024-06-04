import React from 'react';
import { Sidebar } from "flowbite-react";
import { FaHistory, FaHome, FaList } from 'react-icons/fa';
import { FaSheetPlastic } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';


const DashboardSidebar = () => {
    return (
        <div className='min-h-screen border-r-[2px] border-black'>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <NavLink to="/dashboard">
                            <Sidebar.Item icon={FaSheetPlastic}>
                                Worksheet
                            </Sidebar.Item>
                        </NavLink>
                        <NavLink to='/dashboard/paymentHistory'>
                            <Sidebar.Item icon={FaHistory}>
                                Payment History
                            </Sidebar.Item>
                        </NavLink>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <NavLink to='/'>
                            <Sidebar.Item icon={FaHome}>
                                Home
                            </Sidebar.Item>
                        </NavLink>
                        <NavLink to='/contact'>
                            <Sidebar.Item icon={FaList}>
                                Contact
                            </Sidebar.Item>
                        </NavLink>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default DashboardSidebar;