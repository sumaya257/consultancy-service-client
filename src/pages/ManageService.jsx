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
            <div className="p-8 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Manage Your Services</h2>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service._id} className="card shadow-lg border rounded-lg p-4">
                            <img src={service.imageURL} alt={service.serviceName} className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-xl font-semibold">{service.serviceName}</h3>
                            <p>{service.description}</p>
                            <p className="font-bold">Price: ${service.price}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="btn btn-secondary"
                                    // onClick={() => handleEdit(service)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    // onClick={() => handleDelete(service._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
    
                {/* {showModal && (
                    <Modal
                        service={editService}
                        onClose={() => setShowModal(false)}
                        onSave={(updatedService) => {
                            setServices(services.map(service => service._id === updatedService._id ? updatedService : service));
                            setShowModal(false);
                        }}
                    />
                )} */}
            </div>
        );
    };
    
export default ManageService;