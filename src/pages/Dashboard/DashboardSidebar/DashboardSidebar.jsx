import React from 'react';
import { Sidebar } from "flowbite-react";
import { FaHistory, FaHome, FaList } from 'react-icons/fa';
import { FaSheetPlastic } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import useUsersData from '../../../hooks/useUsersData';


const DashboardSidebar = () => {
    const [users] = useUsersData();
    console.log(users);
    const employee = users.map(user => user.role === 'Employee')
    const hr = users.map(user => user.role === 'HR')
    const admin = users.map(user => user.role === 'Admin')
    return (
        <div className='min-h-screen border-r-[2px] border-black'>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items>
                    {
                        employee && <Sidebar.ItemGroup>
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
                    }
                    {
                        hr && <Sidebar.ItemGroup>
                            <NavLink to="/dashboard">
                                <Sidebar.Item icon={FaSheetPlastic}>
                                    Employee List
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to='/dashboard/details'>
                                <Sidebar.Item icon={FaHistory}>
                                    Details
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    }
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