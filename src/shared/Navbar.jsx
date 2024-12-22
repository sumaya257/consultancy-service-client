import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('successful log out')
            })
            .catch(() => {
                console.log('failed to logout')
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>Dashboard</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <button className="flex items-center cursor-pointer">
                    <div className="w-32">  {/* Adjusted width and height */}
                        <img
                            className="w-full h-full object-contain"
                            src="https://i.ibb.co/6ZZZZsw/rb-10939.png"
                            alt="Logo"
                        />
                    </div>
                    <span className="text-xl font-semibold">Consultancy</span>
                </button>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Dashboard</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <><button onClick={handleLogOut} className=''>LogOut</button></> : <><Link to='/register' className='btn mr-2'>Register</Link>
                        <Link to='/login' className='btn'>Login</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;
