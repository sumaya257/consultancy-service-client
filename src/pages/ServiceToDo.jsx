import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const ServiceToDo = () => {
    const [booked, setBooked] = useState([]);
    const { user, loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.email) {
            setLoading(true);
            axios.get(`http://localhost:5000/servicestodo-items?email=${user.email}`)
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

    const handleStatusChange = (serviceId, newStatus) => {
        setLoading(true);
        // Optimistically update the status in the UI
        setBooked((prev) =>
            prev.map((service) =>
                service._id === serviceId ? { ...service, serviceStatus: newStatus } : service
            )
        );
    
        axios.patch(`http://localhost:5000/servicestodo-items/${serviceId}`, { serviceStatus: newStatus })
            .then((response) => {
                console.log('Backend response:', response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error updating status:', error);
                setLoading(false);
            });
    };
    

    if (loading) {
        return (
            <div className="flex justify-center items-center space-x-2 mt-44">
                <div className="w-16 h-16 border-8 border-dashed border-blue-500 rounded-full animate-spin"></div>
                <span className="text-xl">Loading...</span>
            </div>
        );
    }

    return (
        <div className='p-4'>
            <h2 className="text-2xl font-bold mb-6">My Services</h2>
            {booked.length === 0 ? (
                <p>No booked services available.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">

                    {booked.map(service => (
                        <div key={service._id} className="service-card border p-4 rounded shadow">
                            <h3 className="text-sm font-bold">
                                Service ID: <span className="font-normal">{service._id || "1234"}</span>
                            </h3>
                            <h3 className="text-lg font-bold">
                                Service Name: <span className="font-normal">{service.serviceName || "Unnamed Service"}</span>
                            </h3>
                            <h3 className="text-sm font-bold">
                                Service Instructions: <span className="font-normal">{service.serviceInstructions || "No Instructions Provided"}</span>
                            </h3>

                            <p className={`font-normal ${service.serviceStatus === "pending" ? "text-yellow-500" : service.serviceStatus === "working" ? "text-green-500" : "text-red-500"}`}>
                                Status: {service.serviceStatus}
                            </p>

                            {/* Dropdown for status change */}
                            <select
                                value={service.serviceStatus}
                                onChange={(e) => handleStatusChange(service._id, e.target.value)}
                                className="border rounded px-2 py-1 mt-2"
                            >
                                <option value="pending">Pending</option>
                                <option value="working">Working</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServiceToDo;
