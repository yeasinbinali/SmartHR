import React from 'react';
import { Table } from "flowbite-react";
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';

const WorksheetTable = () => {
    return (
        <div className='mb-20'>
            <PrivateContainerHeader title="Worksheet table"></PrivateContainerHeader>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Tasks</Table.HeadCell>
                        <Table.HeadCell>Work Houred</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default WorksheetTable;