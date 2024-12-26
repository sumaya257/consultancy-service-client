// ManageService.jsx
import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import useTitle from '../customHooks/useTitle';
import useAxiosSecure from '../customHooks/useAxiosSecure';

const ManageService = () => {
    useTitle('Manage Service-Guideline Grove');
    const [services, setServices] = useState([]);
    const [editService, setEditService] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [deleteServiceId, setDeleteServiceId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { user, loading, setLoading } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure()
    // Fetch services when user is available
    useEffect(() => {
        if (user && user.email) {
            setLoading(true);
            axiosSecure.get(`/manage-services?email=${user.email}`)
                .then((response) => {
                    setServices(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching services:', error);
                    setLoading(false);
                });
        }
    }, [user, setLoading]);

    // Handle edit action
    const handleEdit = (service) => {
        setEditService(service);
        setShowEditModal(true);
    };

    // Handle delete action
    const handleDelete = async () => {
        try {
            await axios.delete(`https://consultation-service-server.vercel.app/services/${deleteServiceId}`);
            setServices(services.filter(service => service._id !== deleteServiceId));
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting service:', error);
        }
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
        <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Manage Your Services</h2>
    
    {/* Conditional rendering for empty services */}

    {services.length === 0 ? (
            <p>No services available</p>
        
    ) : (
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
                            onClick={() => handleEdit(service)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                setDeleteServiceId(service._id);
                                setShowDeleteModal(true);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )}

    {/* Edit Modal */}
    {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Edit Service</h3>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            const updatedService = {
                                ...editService,
                                serviceName: e.target.serviceName.value,
                                description: e.target.description.value,
                                price: parseFloat(e.target.price.value),
                            };
                            await axios.put(`https://consultation-service-server.vercel.app/services/${editService._id}`, updatedService);
                            setServices(services.map(service => service._id === editService._id ? updatedService : service));
                            setShowEditModal(false);
                        } catch (error) {
                            console.error('Error updating service:', error);
                        }
                    }}
                >
                    <input
                        type="text"
                        name="imageURL"
                        defaultValue={editService.imageURL}
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Service Image URL"
                        required
                    />

                    <input
                        type="text"
                        name="serviceName"
                        defaultValue={editService.serviceName}
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Service Name"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        defaultValue={editService.price}
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Price"
                        required
                    />
                    <textarea
                        name="description"
                        defaultValue={editService.description}
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Description"
                        required
                    />
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="btn btn-secondary mr-2"
                            onClick={() => setShowEditModal(false)}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )}

    {/* Delete Confirmation Modal */}
    {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Confirm Delete</h3>
                <p>Are you sure you want to delete this service?</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={() => setShowDeleteModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )}
</div>

    );
};

export default ManageService;
