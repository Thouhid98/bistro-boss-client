import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../components/Sectiontitle/Sectiontitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <section className='my-12'>
                <Sectiontitle subHeading={'---What Our Client Says--'} heading={'Testimonials'}>

                </Sectiontitle>

                <Swiper
                    pagination={{
                        // type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <Rating className='lg:ml-[550px]'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <div className='m-20 text-center'>
                                <p className='w-[500px]  lg:ml-[310px] mb-3'>{review.details}</p>
                                <h3 className='text-2xl font-bold text-[#D99904]'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;