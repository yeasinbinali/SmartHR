import React from 'react';

const PrivateContainerHeader = ({title}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold border-b-[2px] pb-3 mb-5 border-b-black'>{title}</h1>
        </div>
    );
};

export default PrivateContainerHeader;