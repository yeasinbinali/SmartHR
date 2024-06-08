import React, { useEffect, useState } from 'react';
import useUsersData from '../../../../hooks/useUsersData';
import { Table } from 'flowbite-react';
import Swal from 'sweetalert2';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';

const AllEmployeesTable = () => {
    const axiosSecure = useAxiosPrivate();
    const [employees, setEmployees] = useState([]);
    const [users] = useUsersData();
    const navigate = useNavigate();

    useEffect(() => {
        const filteredEmployees = users.filter(user => user.role !== 'Admin');
        setEmployees(filteredEmployees);
    }, [users])

    const handleHR = (id) => {
        Swal.fire({
            title: "Do you want to make this employee HR?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make him HR!"
        }).then((result) => {
            if (result.isConfirmed) {
                const specificUserArray = employees.filter(user => user._id === id);
                const specificId = specificUserArray[0]._id;

                let specificUser = specificUserArray[0];
                specificUser.role = 'HR';
                const role = specificUser.role;
                const updatedEmployee = { role };

                axiosSecure.patch(`/users/${specificId}`, updatedEmployee)
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
                    title: "Make HR",
                    text: "Successfully done!",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="overflow-x-auto overflow-y-scroll max-h-[50%]">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Designation</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Fire</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        employees.map(user => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {user?.name}
                            </Table.Cell>
                            <Table.Cell>{user?.designation}</Table.Cell>
                            <Table.Cell className='text-center'>{user?.role === 'Employee' ? <button onClick={() => handleHR(user?._id)} className='bg-primary text-white btn px-2 py-1'>Make HR</button> : <b>{user?.role}</b>}</Table.Cell>
                            <Table.Cell><button className='bg-main text-white btn px-2 py-1'>Fire</button></Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default AllEmployeesTable;