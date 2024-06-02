import axios from 'axios';
import React, { useState } from 'react';
import Heading from '../../../components/Heading/Heading';

const Services = () => {
    const [services, setServices] = useState('');

    axios.get('services.json')
        .then(res => {
            const data = res.data;
            setServices(data);
        })

    return (
        <div className='my-20'>
            <Heading
                title="Our Services"
                description="Garment manufacturing is the process of transforming raw materials into finished clothing items through various stages including design, pattern making, fabric sourcing, cutting, sewing, embellishment, quality control, and packaging."
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <div className='border-2 border-[whitesmoke] bg-[whitesmoke] px-7'>
                        <img className='w-[350px] h-[250px] mx-auto brightness-95' src={service.image} alt="service" />
                        <h1 className='text-2xl font-semibold my-2'>{service.name}</h1>
                        <p className='mb-5'>{service.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;