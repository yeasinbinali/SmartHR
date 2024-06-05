import React from 'react';
import { Table } from "flowbite-react";
import useUsersData from '../../../../hooks/useUsersData';

const EmployeeTable = () => {
    const [users] = useUsersData();
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
                                user.status === 'Not verified' ? <Table.Cell>❌</Table.Cell> : <Table.Cell>✅</Table.Cell>
                            }
                            <Table.Cell>
                                <button disabled className='btn btn-sm bg-main text-secondary px-2 py-1'>Pay</button>
                            </Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default EmployeeTable;