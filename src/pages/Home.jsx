import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import useTitle from '../customHooks/useTitle';


const Home = () => {
    useTitle('Home - Guideline Grove');
    return (
        <div className='bg-white dark:bg-gray-900 text-black dark:text-white'>
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;