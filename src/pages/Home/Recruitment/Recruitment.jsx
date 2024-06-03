import React from 'react';
import Heading from '../../../components/Heading/Heading';
import CareerCard from '../../../components/CareerCard/CareerCard';

const Recruitment = () => {
    return (
        <div className='mb-20'>
            <Heading title="Let's build the future" description="Embracing innovation and creativity to shape a world of endless possibilities and sustainable progress. Join us in creating a brighter, smarter tomorrow."></Heading>
            <div className='md:flex justify-between items-center gap-10'>
                <CareerCard
                    image="https://i.ibb.co/W23LW0g/hiring-concept-with-pawns-23-2149519871.jpg"
                    title="Careers at SmartHR"
                    description="Are you ready for a more than a job? Find your path, purpose, community and careers at SmartHR"
                    buttonTitle="Search Position"
                ></CareerCard>
                <CareerCard
                    image="https://i.ibb.co/XjZJY2G/two-cheerful-businessmen-working-project-together-700248-29495.jpg"
                    title="Internship Programs"
                    description="Our internships provide an opportunity to gain real work experience while making a lasting impact"
                    buttonTitle="Search Internship"
                ></CareerCard>
            </div>
        </div>
    );
};

export default Recruitment;