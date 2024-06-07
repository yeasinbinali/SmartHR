import React from 'react';
import { Table } from "flowbite-react";
import useAllWorksheet from '../../../../hooks/useAllWorksheet';
import { Dropdown, DropdownItem } from "flowbite-react";

const Progress = () => {
    const [allWorks] = useAllWorksheet();
    console.log(allWorks);
    let employee = [];
    allWorks.map(allWork => employee.includes(allWork.name))
    return (
        <div className='mt-5 ml-5'>
            <div className='bg-main w-[25%] mb-10'>
                <Dropdown label="Dropdown bottom" placement="bottom">
                    <DropdownItem>Dashboard</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
            </div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Employee name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Task</Table.HeadCell>
                        <Table.HeadCell>WorkHoured</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            allWorks.map(work => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {work.name}
                                </Table.Cell>
                                <Table.Cell>{work.email}</Table.Cell>
                                <Table.Cell>{work.task}</Table.Cell>
                                <Table.Cell>{work.workHoured} hour</Table.Cell>
                                <Table.Cell>{work.date.slice(0, 10)}</Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Progress;