import React from 'react';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const nav = [
        <li id='nav-item'><NavLink to='/'>Home</NavLink></li>,
        <li id='nav-item'><NavLink to='/dashboard'>Dashboard</NavLink></li>,
        <li id='nav-item'><NavLink to='contact'>Contact</NavLink></li>
    ]
    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {nav}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;