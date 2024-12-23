import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate('/'); // Redirect to home after logout
                console.log('Successful logout');
            })
            .catch(() => {
                console.log('Failed to logout');
            });
    };

    return (
        <div className="navbar bg-base-100 sticky top-0 z-10 shadow-md">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown Menu */}
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        {user && (
                            <li tabIndex={0}>
                                <details>
                                    <summary className="cursor-pointer">Dashboard</summary>
                                    <ul className="p-2">
                                        <li>
                                            <NavLink to="/add-service">Add Service</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/manage-service">Manage Service</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/booked-services">Booked Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/service-todo">Service To-Do</NavLink>
                                        </li>
                                    </ul>
                                </details>
                                {/* Logout Button */}
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-error w-full text-left">
                                        Logout
                                    </button>
                                </li>
                            </li>
                        )}
                        {/* Add Register/Login for Small Devices */}
                        {!user && (
                            <>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Logo and Title */}
                <NavLink to="/" className="btn btn-ghost flex items-center gap-2">
                    <img className="w-12" src={logo} alt="Website Logo" />
                    <h2 className="text-xl font-semibold">Guideline Grove</h2>
                </NavLink>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    {user && (
                        <li tabIndex={0} className="dropdown dropdown-hover">
                            <label tabIndex={0} className="cursor-pointer">Dashboard</label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
                            >
                                <li>
                                    <NavLink to="/add-service">Add Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage-service">Manage Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/booked-services">Booked Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service-todo">Service To-Do</NavLink>
                                </li>
                            </ul>
                        </li>
                    )}
                </ul>
            </div>

            {/* Navbar End (Login/Register or Logout) */}
            <div className="navbar-end  items-center gap-4 hidden md:flex">
                {user ? (
                    <div className="flex items-center gap-2">
                        <img
                            src={user.photoURL || 'https://via.placeholder.com/40'}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <span>{user.displayName || 'User'}</span>
                        <button onClick={handleLogOut} className="btn btn-error">
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <NavLink to="/register" className="btn">
                            Register
                        </NavLink>
                        <NavLink to="/login" className="btn">
                            Login
                        </NavLink>
                    </>
                )}
            </div>
        </div>

    );
};

export default Navbar;
