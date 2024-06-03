import React from 'react';

const Heading = ({title, description}) => {
    return (
        <div className='text-center mb-10'>
            <h1 className='text-5xl font-bold uppercase'>{title}</h1>
            <p className='w-[50%] mx-auto text-center mt-5'>{description}</p>
        </div>
    );
};

export default Heading;