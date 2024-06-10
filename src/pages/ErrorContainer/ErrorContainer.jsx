import React from 'react';
import errorImage from '../../assets/error.gif';
import { Link } from 'react-router-dom';

const ErrorContainer = () => {
    return (
        <div className='text-center mb-10'>
            <img className='w-[50%] mx-auto' src={errorImage} alt="error" />
            <Link to={'/'}><button className='btn bg-primary text-white px-3 py-1'>Go Back</button></Link>
        </div>
    );
};

export default ErrorContainer;