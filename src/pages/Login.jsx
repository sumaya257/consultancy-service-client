import React from 'react';
import { useState,useContext } from 'react';
import Lottie from 'lottie-react';
import loginAnimationData from '../assets/lottie/login.json'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {logInUser} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email,password)
        .then(result=>{
            console.log('login',result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
        return (
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96">
                        <Lottie animationData={loginAnimationData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold ml-8 mt-4 text-center">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        className="input input-bordered pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {passwordVisible ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                        
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p className="text-center text-gray-500 mt-4">
                                Don't have an account?
                                <span className="text-red-500">
                                    <Link to="/register">Register</Link>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;