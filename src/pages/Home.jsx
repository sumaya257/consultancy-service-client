import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';


const Home = () => {
    return (
        <div className='bg-white dark:bg-gray-900 text-black dark:text-white'>
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;