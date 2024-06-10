import React, { useState } from 'react';
import { Table, Dropdown, DropdownItem } from "flowbite-react";
import useAllWorksheet from '../../../../hooks/useAllWorksheet';

const Progress = () => {
    const [allWorks] = useAllWorksheet();
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);

    const employeeName = allWorks.map(work => work.name);
    const setEmployeeName = new Set(employeeName);
    const employeeNameInArray = Array.from(setEmployeeName);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleEmployee = (name) => {
        setSelectedEmployee(name === selectedEmployee ? null : name); // Toggle selection
    };

    const handleMonth = (month) => {
        setSelectedMonth(month === selectedMonth ? null : month); // Toggle selection
    };

    const getMonthName = (dateStr) => {
        const date = new Date(dateStr);
        return months[date.getMonth()];
    };

    const filteredWorks = allWorks.filter(work => {
        const matchesEmployee = selectedEmployee ? work.name === selectedEmployee : true;
        const matchesMonth = selectedMonth ? getMonthName(work.date) === selectedMonth : true;
        return matchesEmployee && matchesMonth;
    });

    return (
        <div className='mb-20 mt-5 ml-5'>
            <div className='flex'>
                <div className='bg-main mb-10'>
                    <Dropdown label={selectedEmployee ? selectedEmployee : 'Employee'} placement="bottom">
                        {employeeNameInArray.map(employee => (
                            <DropdownItem key={employee} onClick={() => handleEmployee(employee)}>
                                {employee}
                            </DropdownItem>
                        ))}
                    </Dropdown>
                </div>
                <div className='bg-primary mb-10 ml-10'>
                    <Dropdown label={selectedMonth ? selectedMonth : 'Month'} placement="bottom">
                        {months.map(month => (
                            <DropdownItem key={month} onClick={() => handleMonth(month)}>
                                {month}
                            </DropdownItem>
                        ))}
                    </Dropdown>
                </div>
            </div>
            <div className="overflow-x-scroll h-96">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Employee name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Task</Table.HeadCell>
                        <Table.HeadCell>Work Houred</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {filteredWorks.map(work => (
                            <Table.Row key={work._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {work.name}
                                </Table.Cell>
                                <Table.Cell>{work.email}</Table.Cell>
                                <Table.Cell>{work.task}</Table.Cell>
                                <Table.Cell>{work.workHoured} hour</Table.Cell>
                                <Table.Cell>{work.date.slice(0, 10)}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Progress;
