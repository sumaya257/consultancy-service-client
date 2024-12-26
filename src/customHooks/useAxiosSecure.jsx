import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL:'https://consultation-service-server.vercel.app/',
    withCredentials: true
})
const useAxiosSecure = () => {
    const {logOutUser} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        },error=>{
            if(error.status=== 401 || error.status===403){
                logOutUser()
                .then(()=>{
                    navigate('/login')
                })
            }
            
            return Promise.reject(error)
        }

    )
    })
    return axiosInstance
};

export default useAxiosSecure;