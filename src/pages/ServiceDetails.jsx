import React, { useContext } from 'react';
import { Link, useLoaderData,useParams } from 'react-router-dom';
import useTitle from '../customHooks/useTitle';


const ServiceDetails = () => {
    useTitle('Details - Guideline Grove');
    const  services  = useLoaderData(); // Get services 
    const { id } = useParams();


    // Find the specific service by ID
    const service = services.find((service) => service._id === id);

    return (
        <div className="p-8 max-w-2xl mx-auto">
            {services.length === 0 ? (
                <p>No services available</p>
            ) : (
                    <div key={service._id} className="mb-8">
                        {/* Service Provider Information */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 dark:text-black">
                            <h2 className="text-xl font-bold mb-4">Service Provider Information</h2>
                            <div className="flex items-center mb-4">
                                <img
                                    src={service.serviceProviderPhoto}
                                    alt={service.providerName}
                                    className="w-16 h-16 object-cover rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{service.serviceProviderName}</h3>
                                    <p className="text-sm text-gray-600">Location: {service.serviceArea}</p>
                                    <p className="text-sm text-blue-500">Email: {service.
                                        serviceProviderEmail}</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Service Section */}
                        <div className="bg-white p-6 rounded-lg shadow-lg dark:text-black">
                            <h2 className="text-3xl font-bold mb-4">{service.serviceName}</h2>
                            <img
                                src={service.imageURL}
                                alt={service.serviceName}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <p className="text-lg mb-4">{service.description}</p>

                            <div className="flex items-center mb-4">
                                <img
                                    src={service.serviceProviderPhoto}
                                    alt={service.providerName}
                                    className="w-10 h-10 object-cover rounded-full mr-4"
                                />
                                <p className="text-lg font-semibold">{service.serviceProviderName}</p>
                            </div>

                            <p className="text-xl font-bold mb-4">Price: ${service.price}</p>

                            {/* Book Now Button with Dynamic ID */}
                            <Link to={`/book-now/${service._id}`}>
                                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                        <div className='mt-20'></div>
                    </div>
            )}
        </div>
    );
};
export default ServiceDetails;
