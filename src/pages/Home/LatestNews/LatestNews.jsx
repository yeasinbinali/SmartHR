import React, { useState } from 'react';
import Heading from '../../../components/Heading/Heading';
import GridCard from '../../../components/GridCard/GridCard';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([]);
    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/news')
        .then(res => {
            setLatestNews(res.data);
        })
        .catch(error => {
            console.error(error.message);
        })

    return (
        <div className='mb-20'>
            <Heading title="Latest News" description="Stay informed with our latest news roundup! Get concise summaries of breaking stories, top headlines, and updates on global events."></Heading>
            <div className='flex justify-between items-center gap-10'>
                {
                    latestNews.map(news => <GridCard name={news.name} description={news.description} image={news.image}></GridCard>)
                }
            </div>
        </div>
    );
};

export default LatestNews;