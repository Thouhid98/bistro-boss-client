import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import Sectiontitle from '../../../components/Sectiontitle/Sectiontitle';

const Category = () => {
    return (
        <div>
            <Sectiontitle 
            subHeading={'---From 11.00am to 10.00pm---'}
            heading={"ORDER ONLINE"}>
                
            </Sectiontitle>
            <Swiper 
                slidesPerView={4}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-6"
            >
                <SwiperSlide className='ml-6 mb-4'>
                    <img src={slide1} alt="" />
                    <h3 className='text-3xl font-medium text-center uppercase text-white -mt-16 '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" />
                <h3 className='text-3xl font-medium text-center uppercase text-white -mt-16 '>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                <h3 className='text-3xl font-medium text-center uppercase text-white -mt-16 '>Soup</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                <h3 className='text-3xl font-medium text-center uppercase text-white -mt-16 '>Dasetrs</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" />
                <h3 className='text-3xl font-medium text-center uppercase text-white -mt-16 '>Soup</h3>
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Category;