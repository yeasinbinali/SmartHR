import React from 'react';

const CareerCard = ({ image, title, description, buttonTitle }) => {
    return (
        <div className='w-[100%] md:w-[60%] lg:w-[30%] mx-auto text-center bg-[whitesmoke] mt-5 md:mt-0'>
            <img className='w-[100%] mx-auto' src={image} alt="career" />
            <div className='px-5'>
                <h1 className='text-2xl font-bold mt-2'>{title}</h1>
                <p className='my-2'>{description}</p>
                {buttonTitle === 'Search Position' ? <button className='btn bg-primary text-secondary mb-5 py-2 px-4'>{buttonTitle}</button> : <button className='btn bg-main text-secondary mb-5 py-2 px-4'>{buttonTitle}</button>}
            </div>
        </div>
    );
};

export default CareerCard;