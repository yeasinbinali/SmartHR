import React from 'react';
import { Table, Tooltip } from "flowbite-react";
import useUsersData from '../../../../hooks/useUsersData';
import Swal from 'sweetalert2';

const EmployeeTable = () => {
    const [users] = useUsersData();

    const handleNotVerified = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const specificUser = users.filter(user => user._id === id);
                console.log(specificUser);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Bank Account</Table.HeadCell>
                    <Table.HeadCell>Salary</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Payment</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        users.map(user => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {user.name}
                            </Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.bankAccount}</Table.Cell>
                            <Table.Cell>{user.salary}</Table.Cell>
                            {
                                user.status === 'Not verified' ? <Tooltip content="Not verified"><Table.Cell onClick={() => handleNotVerified(user._id)}>❌</Table.Cell></Tooltip> : <Tooltip content="Verified"><Table.Cell>✅</Table.Cell></Tooltip>
                            }
                            {
                                user.status === 'Not verified' ? <Table.Cell>
                                    <button disabled className='btn btn-sm bg-[whitesmoke] text-black px-2 py-1'>Pay</button>
                                </Table.Cell> : <Table.Cell>
                                    <button className='btn btn-sm bg-main text-secondary px-2 py-1'>Pay</button>
                                </Table.Cell>
                            }
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default EmployeeTable;