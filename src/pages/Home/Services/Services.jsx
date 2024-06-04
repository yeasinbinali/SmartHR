import React, { useState } from 'react';
import Heading from '../../../components/Heading/Heading';
import GridCard from '../../../components/GridCard/GridCard';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Services = () => {
    const [services, setServices] = useState([]);
    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/services')
        .then(res => {
            setServices(res.data);
        })
        .catch(error => {
            console.error(error.message);
        })

    return (
        <div className='my-20'>
            <Heading
                title="Our Services"
                description="Garment manufacturing is the process of transforming raw materials into finished clothing items through various stages including design, pattern making, fabric sourcing, cutting, sewing, embellishment, quality control, and packaging."
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map((service) => <GridCard name={service.name} description={service.description} image={service.image}></GridCard>)
                }
            </div>
        </div>
    );
};

export default Services;