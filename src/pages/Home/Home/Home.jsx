import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Recruitment from '../Recruitment/Recruitment';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
            <Recruitment></Recruitment>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;