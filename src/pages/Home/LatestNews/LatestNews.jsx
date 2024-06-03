import React, { useEffect, useState } from 'react';
import Heading from '../../../components/Heading/Heading';
import axios from 'axios';
import GridCard from '../../../components/GridCard/GridCard';

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        axios.get('news.json')
            .then(res => {
                const data = res.data;
                setLatestNews(data);
            })
    }, [])

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