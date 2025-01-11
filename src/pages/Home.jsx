import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import useTitle from '../customHooks/useTitle';
import PopularServices from '../components/PopularServices';
import OurHappyCustomers from '../components/OurHappyCustomers';
import HowItWorks from '../components/HowItWorks';
import ContactUs from '../components/ContactUs';


const Home = () => {
    useTitle('Home - Guideline Grove');
    return (
        <div className='bg-white dark:bg-gray-900 text-black dark:text-white'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <PopularServices></PopularServices>
            <OurHappyCustomers></OurHappyCustomers>
            <HowItWorks></HowItWorks>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;