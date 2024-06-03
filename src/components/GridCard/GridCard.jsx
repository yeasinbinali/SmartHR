import React from 'react';
import './GridCard.css';

const GridCard = ({ image, name, description }) => {
    return (
        <div className='border-2 border-[whitesmoke] bg-[whitesmoke] px-7'>
            <img className='w-[350px] h-[250px] mx-auto brightness-95' src={image} alt="" />
            <h1 className='text-2xl font-bold my-2'>{name}</h1>
            <p id='scroll-description' className='mb-5'>{description}</p>
        </div>
    );
};

export default GridCard;