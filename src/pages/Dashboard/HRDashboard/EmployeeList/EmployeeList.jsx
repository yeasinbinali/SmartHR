import React from 'react';
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';
import EmployeeTable from './EmployeeTable';

const EmployeeList = () => {
    return (
        <div className='mt-5 ml-5'>
            <PrivateContainerHeader title="Employee List"></PrivateContainerHeader>
            <EmployeeTable></EmployeeTable>
        </div>
    );
};

export default EmployeeList;