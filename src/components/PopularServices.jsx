import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PopularServices = () => {
    const { services } = useContext(AuthContext);
    // console.log(services)

    // Limit to the first 6 services
    const popularServices = services.slice(0, 6);

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6">Popular Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularServices.map((service) => (
                    <div key={service._id} className="service-card border p-4 rounded-lg shadow-lg">
                        <img
                            src={service.imageURL}
                            alt={service.serviceName}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="service-info p-4">
                            <h3 className="text-xl font-semibold">{service.serviceName}</h3>
                            <p className="text-gray-700">
                                {service.description?.length > 50
                                    ? service.description.slice(0, 50) + '...'
                                    : service.description}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-sm text-gray-500">{service.serviceArea}</span>
                                <span className="text-lg font-semibold">{`$${service.price}`}</span>
                            </div>
                            <Link to={`/services/${service._id}`}>
                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                                    View Details
                                </button>
                            </Link>
                        </div>

                        {/* Service Provider Info */}
                        <div className="provider-info flex items-center mt-4">
                            <img
                                src={service.serviceProviderPhoto}
                                alt={service.serviceProviderName}
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <div>
                                <p className="text-sm font-semibold">{service.serviceProviderName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show All Button */}
            <div className="text-center mt-6">
                <Link to="/all-services">
                    <button className="px-6 py-2 bg-gray-700 text-white rounded-lg">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularServices;
