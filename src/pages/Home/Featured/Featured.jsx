import React from 'react';
import Sectiontitle from '../../../components/Sectiontitle/Sectiontitle';
import FeaturedImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <>

            <div className='featured-item bg-fixed'>
                <div className='bg-black bg-opacity-60'>
                    <div className='pt-12 text-white'>
                        <Sectiontitle subHeading={'---Check it out---'} heading={'Featured Items'}></Sectiontitle>
                    </div>
                    <div className='flex justify-center  text-white items-center pb-20 pt-12 px-36 gap-4'>
                        <div>
                            <img src={FeaturedImg} alt="" />
                        </div>
                        <div>
                            <p className='mb-2'>Aug 20, 2023 </p>
                            <p className='uppercase mb-2'>Where can i get some</p>
                            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem obcaecati aut dolore, hic incidunt veniam enim tempore cum voluptatibus quo reprehenderit eaque totam cumque voluptatem eveniet, omnis quas minima harum!</p>
                            <button className="btn btn-outline btn-warning border-0 border-b-4">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Featured;