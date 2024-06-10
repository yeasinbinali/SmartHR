import React from 'react';
import { Table } from "flowbite-react";
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';
import useWorksheet from '../../../../hooks/useWorksheet';

const WorksheetTable = () => {
    const [worksheet] = useWorksheet();
    console.log(worksheet)

    return (
        <div className='mb-20'>
            <PrivateContainerHeader title="Worksheet table"></PrivateContainerHeader>
            <div className="overflow-x-auto">
                {
                    worksheet.length === 0 ? <p>You have added no task yet</p> : <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Tasks</Table.HeadCell>
                            <Table.HeadCell>Work Houred</Table.HeadCell>
                            <Table.HeadCell>Date</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                worksheet?.map(work => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {work.task}
                                    </Table.Cell>
                                    <Table.Cell>{work.workHoured} hour</Table.Cell>
                                    <Table.Cell>{work.date.slice(0, 10)}</Table.Cell>
                                </Table.Row>)
                            }
                        </Table.Body>
                    </Table>
                }
            </div>
        </div>
    );
};

export default WorksheetTable;