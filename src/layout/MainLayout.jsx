import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';


const MainLayout = () => {
    return (
        <div className=' bg-white  dark:bg-gray-900 text-black dark:text-white'>
           <Navbar></Navbar>
            <div className='min-h-[calc(100vh-312px)] max-w-7xl mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;