import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { FaHistory, FaHome, FaList } from 'react-icons/fa';
import { FaSheetPlastic } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import useUsersData from '../../../hooks/useUsersData';
import { authContext } from '../../../providers/AuthProvider';


const DashboardSidebar = () => {
    const [users] = useUsersData();
    const { user } = useContext(authContext);
    const recognizedUser = users.filter(recUser => recUser.email === user.email)

    const employee = recognizedUser[0]?.role === 'Employee';
    const hr = recognizedUser[0]?.role === 'HR';
    const admin = recognizedUser[0]?.role === 'Admin';

    return (
        <div className='min-h-screen border-r-[2px] border-black'>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items>
                    {
                        employee && <Sidebar.ItemGroup>
                            <NavLink to="/dashboard/worksheet">
                                <Sidebar.Item className='mb-2' icon={FaSheetPlastic}>
                                    Worksheet
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to='/dashboard/paymentHistory'>
                                <Sidebar.Item className='mb-2' icon={FaHistory}>
                                    Payment History
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    }
                    {
                        hr && <Sidebar.ItemGroup>
                            <NavLink to="/dashboard/employeeList">
                                <Sidebar.Item className='mb-2' icon={FaSheetPlastic}>
                                    Employee List
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to='/dashboard/details'>
                                <Sidebar.Item className='mb-2' icon={FaHistory}>
                                    Details
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    }
                    <Sidebar.ItemGroup>
                        <NavLink to='/'>
                            <Sidebar.Item className='mb-2' icon={FaHome} >
                                Home
                            </Sidebar.Item>
                        </NavLink>
                        <NavLink to='/contact'>
                            <Sidebar.Item className='mb-2' icon={FaList}>
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