import React, { useContext } from 'react';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { authContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logoutUser } = useContext(authContext);

    const nav = [
        <li id='nav-item' className='text-lg'><NavLink to='/'>Home</NavLink></li>,
        <li id='nav-item' className='text-lg'><NavLink to='/dashboard'>Dashboard</NavLink></li>,
        <li id='nav-item' className='text-lg'><NavLink to='contact'>Contact</NavLink></li>
    ]

    const handleLogout = () => {
        Swal.fire({
            title: "Do you want to log out?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser()
                    .then(() => {})
                    .catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            footer: `${error.message}`
                          });
                    })
                Swal.fire({
                    title: "Done",
                    text: "Logout successfully",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <Navbar className='bg-gray-50 py-5' fluid rounded>
                <Navbar.Brand>
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user?.email ? <>
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" img={user.photoURL} rounded />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">{user.displayName}</span>
                                    <span className="block truncate text-sm font-medium">{user.email}</span>
                                </Dropdown.Header>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                            </Dropdown>
                            <Navbar.Toggle />
                        </> : <Link to='/login'><button className='btn bg-main text-white px-5 py-2'>Login</button></Link>
                    }
                </div>
                <Navbar.Collapse>
                    {nav}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;