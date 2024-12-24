import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const { user, loading, setLoading } = useContext(AuthContext);  // Getting user and loading from AuthContext

    // Fetch services when user is available (check if user is not null)
    useEffect(() => {
        if (user && user.email) {  // Make sure user and user.email are available
            setLoading(true);  // Set loading to true before the fetch request
            axios.get(`http://localhost:5000/services?email=${user.email}`)
                .then((response) => {
                    setServices(response.data);  // Set services based on the response
                    setLoading(false);  // Set loading to false after the data is fetched
                })
                .catch((error) => {
                    console.error('Error fetching services:', error);  // Log errors
                    setLoading(false);  // Set loading to false in case of an error
                });
        }
    }, [user, setLoading]);  // Dependency array includes `user` and `setLoading`

    // Show loading spinner if still loading
    if (loading) {
        return (
            <div className="flex justify-center items-center space-x-2">
                <div className="w-16 h-16 border-8 border-dashed border-blue-500 rounded-full animate-spin"></div>
                <span className="text-xl">Loading...</span>
            </div>
        );
    }

    return (
        <div>
            <h2>Manage Your Services</h2>
            <div>{services.length} services found</div>
        </div>
    );
};

export default ManageService;
