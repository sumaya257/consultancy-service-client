import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const BookedService = () => {
    const [booked, setBooked] = useState([]);
    const { user, loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.email) {
            setLoading(true);
            axios.get(`http://localhost:5000/purchased-items?email=${user.email}`)
                .then((response) => {
                    setBooked(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching services:', error);
                    setLoading(false);
                });
        }
    }, [user, setLoading]);

    if (loading) {
        return (
            <div className="flex justify-center items-center space-x-2 mt-44">
                <div className="w-16 h-16 border-8 border-dashed border-blue-500 rounded-full animate-spin"></div>
                <span className="text-xl">Loading...</span>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Your Booked Services</h2>
            {booked.length === 0 ? (
                <p>No booked services found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {booked.map((service) => (
                        <div key={service._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Service Image */}
                            <img
                                src={service.serviceImage}
                                alt={service.serviceName}
                                className="w-full h-48 object-cover"
                            />

                            {/* Service Info */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{service.serviceName}</h3>
                                <p className="text-gray-700 mb-1">
                                    <strong>Price:</strong> ${service.servicePrice}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <strong>Provider:</strong> {service.serviceProviderName}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <strong>Email:</strong> {service.serviceProviderEmail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookedService;
