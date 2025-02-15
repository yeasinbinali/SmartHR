import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from "flowbite-react";
import useUsersData from '../../../../hooks/useUsersData';
import Swal from 'sweetalert2';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { Link, useNavigate } from 'react-router-dom';
import useEmployeeSalary from '../../../../hooks/useEmployeeSalary';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
    const [users] = useUsersData();
    const axiosSecure = useAxiosPrivate();
    const navigate = useNavigate();
    const [payment] = useEmployeeSalary();

    useEffect(() => {
        const filterEmployees = users.filter(user => user.role === 'Employee');
        setEmployees(filterEmployees);
    }, [users])

    const paymentEmployee = payment.map(transaction => transaction.email);


    const handleNotVerified = (id) => {
        Swal.fire({
            title: "Do you want to verify this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, verify it"
        }).then((result) => {
            if (result.isConfirmed) {
                const specificUserArray = employees.filter(user => user._id === id);
                const specificId = specificUserArray[0]._id;

                let specificUser = specificUserArray[0];
                specificUser.status = 'Verified';
                const status = specificUser.status;
                const updatedUser = { status };

                axiosSecure.patch(`/users/${specificId}/status`, updatedUser)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Verified successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        navigate(0)
                    })
                Swal.fire({
                    title: "Verified",
                    text: "Employee verified successfully",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="overflow-x-auto overflow-y-scroll lg:w-[90%]">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Role</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Bank Account</Table.HeadCell>
                    <Table.HeadCell>Salary</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Payment</Table.HeadCell>
                    <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        employees.map(user => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{user?.role}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {user?.name}
                            </Table.Cell>
                            <Table.Cell>{user?.email}</Table.Cell>
                            <Table.Cell>{user?.bankAccount}</Table.Cell>
                            <Table.Cell>${user?.salary}</Table.Cell>
                            {
                                user.status === 'Not verified' ? <Tooltip content="Not verified"><Table.Cell onClick={() => handleNotVerified(user._id)}>❌</Table.Cell></Tooltip> : <Tooltip content="Verified"><Table.Cell>✅</Table.Cell></Tooltip>
                            }
                            {
                                user.status === 'Not verified' ? <Table.Cell>
                                    <button disabled className='btn btn-sm bg-[whitesmoke] text-black px-2 py-1'>Pay</button>
                                </Table.Cell> : <Table.Cell>
                                    {paymentEmployee.includes(user.email) ? <p className='text-main'>Paid</p> : <Link to={`/dashboard/employeeList/payment/${user._id}`}><button className='btn btn-sm bg-main text-secondary px-2 py-1'>Pay</button></Link>}
                                </Table.Cell>
                            }
                            <Link to={`/dashboard/employeeList/${user._id}`}><Table.Cell><button className='btn btn-sm bg-primary text-secondary px-2 py-1'>Details</button></Table.Cell></Link>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default EmployeeTable;