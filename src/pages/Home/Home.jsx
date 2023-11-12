import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import Popularmanu from './Popularmanu/Popularmanu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Popularmanu></Popularmanu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;