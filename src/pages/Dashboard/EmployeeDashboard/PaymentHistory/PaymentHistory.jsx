import React, { useContext, useEffect, useState } from 'react';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { authContext } from '../../../../providers/AuthProvider';
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';
import { Table } from "flowbite-react";

const PaymentHistory = () => {
    const axiosSecure = useAxiosPrivate();
    const [paymentHistory, setpaymentHistory] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        axiosSecure.get(`/payment/${user?.email}`)
            .then(res => {
                setpaymentHistory(res.data)
            })
    }, [])

    return (
        <div className='mt-5 ml-5 mb-20'>
            <PrivateContainerHeader title={"Payment History"}></PrivateContainerHeader>
            <div>
                {paymentHistory.map(history => <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Month</Table.HeadCell>
                            <Table.HeadCell>Amount</Table.HeadCell>
                            <Table.HeadCell>Transaction ID</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {history.salaryMoth}
                                </Table.Cell>
                                <Table.Cell>$ {history.price}</Table.Cell>
                                <Table.Cell>{history.transactionId}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>)}
            </div>
        </div>
    );
};

export default PaymentHistory;