import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if (loading) {
        return (
            <div className="flex justify-center items-center space-x-2 mt-44">
                <div className="w-16 h-16 border-8 border-dashed border-blue-500 rounded-full animate-spin"></div>
                <span className="text-xl">Loading...</span>
            </div>
        );
    }
   if(user&&user?.email){
    return children
   }
   return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;