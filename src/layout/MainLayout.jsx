import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ThemeToggleButton from '../components/ThemeToggoleButton';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white'>
            <Navbar></Navbar>
             {/* Theme Toggle Button */}
            <div className=" px-4 rounded-lg my-2 sticky z-10 top-[75px] ">
            <ThemeToggleButton />  {/* Include the Theme Toggle Button here */}
            </div>
            <div className='min-h-[calc(100vh-312px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;