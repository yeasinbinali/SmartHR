import React, { useState } from 'react';
import Heading from '../../../components/Heading/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/testimonials')    
        .then(res => {
            setTestimonials(res.data);
        })
        .catch(error => {
            console.error(error.message);
        })

    return (
        <div className='mb-20'>
            <Heading title="Testimonials"></Heading>
            <div>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide className='flex flex-col justify-between text-left mb-16'>
                            <p>"{testimonial.comment}"</p>
                            <div className='flex justify-between items-center gap-3 mt-5'>
                                <div className='flex items-center gap-3'>
                                    <img style={{ width: '60px', height: '60px' }} className='rounded-full' src={testimonial.user_image} alt="" />
                                    <div>
                                        <p>{testimonial.name}</p>
                                        <small>{testimonial.country}</small>
                                    </div>
                                </div>
                                <div>
                                    <p className='flex items-center gap-1'><FaStar/>{testimonial.rating}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;