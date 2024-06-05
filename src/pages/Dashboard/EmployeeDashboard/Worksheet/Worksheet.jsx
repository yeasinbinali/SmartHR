import React from 'react';
import WorksheetTable from './WorksheetTable';
import WorksheetForm from './WorksheetForm';

const Worksheet = () => {
    return (
        <div className='mt-5 ml-5'>
            <WorksheetForm></WorksheetForm>
            <WorksheetTable></WorksheetTable>
        </div>
    );
};

export default Worksheet;
