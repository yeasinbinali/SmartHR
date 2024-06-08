import React from 'react';
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';
import AllEmployeesTable from './AllEmployeesTable';

const AllEmployees = () => {

    return (
        <div className='mt-5 ml-5'>
            <PrivateContainerHeader title="All Employees"></PrivateContainerHeader>
            <AllEmployeesTable></AllEmployeesTable>
        </div>
    );
};

export default AllEmployees;