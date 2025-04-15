import React, { useState, useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../customHooks/useTitle';

const AllServices = () => {
    useTitle('Services - Guideline Grove');
    const services = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    // Filter services based on the search query
    const filteredServices = services.filter(service =>
        service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const navigate = useNavigate();
    if (!filteredServices || filteredServices.length === 0) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-2xl font-semibold">No services available</h2>

                <button
                    onClick={() => navigate(0)}
                    className="btn btn-primary mt-4"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 bg-gray-100  text-black rounded-lg"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-4">
                {filteredServices.map((service) => (
                    <div key={service._id} className="service-card border p-4 rounded-lg shadow-lg  dark:bg-gray-100  dark:text-black">
                        <img
                            src={service.imageURL}
                            alt={service.serviceName}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="service-info p-4">
                            <h3 className="text-xl font-semibold">{service.serviceName}</h3>
                            <p className="text-gray-700">{service.description?.slice(0, 100) || 'No description available'}...</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-sm text-gray-500">{service.serviceArea}</span>
                                <span className="text-lg font-semibold">{`$${service.price}`}</span>
                            </div>
                            <Link to={`/services/${service._id}`}>
                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">View Details</button>
                            </Link>
                        </div>
                        {service.serviceProviderPhoto && (
                            <div className="provider-info flex items-center mt-4">
                                <img
                                    src={service.serviceProviderPhoto}
                                    alt={service.serviceProviderName}
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <div>
                                    <p className="text-sm font-semibold">{service.serviceProviderName}</p>
                                    <p className="text-xs text-gray-500">{service.serviceProviderEmail}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllServices;
