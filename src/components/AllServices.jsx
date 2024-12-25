import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllServices = () => {
   const services = useLoaderData()

    if (!services || services.length === 0) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-2xl font-semibold">No services available</h2>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="grid grid-cols-1 gap-4">
                {services.map((service) => (
                    <div key={service._id} className="service-card border p-4 rounded-lg shadow-lg">
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
