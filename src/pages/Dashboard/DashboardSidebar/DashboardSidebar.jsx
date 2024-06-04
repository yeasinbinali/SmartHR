import React from 'react';
import { Sidebar } from "flowbite-react";
import { FaDatabase, FaHome, FaList } from 'react-icons/fa';


const DashboardSidebar = () => {
    return (
        <div className='min-h-screen'>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={FaDatabase}>
                            Dashboard
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={FaHome}>
                            Home
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={FaList}>
                            Contact
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default DashboardSidebar;