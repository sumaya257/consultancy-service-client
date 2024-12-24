import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const BookNow = () => {
  const { id } = useParams(); // Get the service id from URL
  const { services, user } = useContext(AuthContext); // Get services and currentUser from context

  // Find the service matching the id
  const service = services.find((s) => s._id === id);

  // State for form data
  const [formData, setFormData] = useState({
    serviceTakingDate: '',
    specialInstructions: '',
  });

  // Check if the service is found
  useEffect(() => {
    if (service) {
      console.log('Service found:', service);
    }
  }, [service]);

  // Handle input changes for editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    // You can handle form submission here (e.g., send data to the backend)
  };

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto  dark:bg-gray-900 text-black dark:text-black">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Book {service.serviceName}</h1>
      
      {/* Service Information */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <img
          src={service.imageURL}
          alt={service.serviceName}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-lg mb-4">{service.description}</p>
        <p className="text-xl font-bold mb-4">Price: ${service.price}</p>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
        
        {/* Non-editable fields */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">Service ID</label>
          <input
            type="text"
            value={service._id}
            className="w-full p-2 mt-2 border rounded-lg bg-gray-200"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Service Name</label>
          <input
            type="text"
            value={service.serviceName}
            className="w-full p-2 mt-2 border rounded-lg bg-gray-200"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Service Image</label>
          <img
            src={service.imageURL}
            alt={service.serviceName}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Provider Name</label>
          <input
            type="text"
            value={service.serviceProviderName}
            className="w-full p-2 mt-2 border rounded-lg bg-gray-200"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Provider Email</label>
          <input
            type="email"
            value={service.serviceProviderEmail}
            className="w-full p-2 mt-2 border rounded-lg bg-gray-200"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Current User Name</label>
          <input
            type="text"
            value={user?.displayName || 'N/A'}
            className="w-full p-2 mt-2 border rounded-lg bg-gray-200"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Current User Email</label>
          <input
            type="email"
            value={user?.email || 'N/A'}
            className="w-full p-2 mt-2 border rounded-lg bg-gray-200"
            disabled
          />
        </div>

        {/* Editable fields */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">Service Taking Date</label>
          <input
            type="date"
            name="serviceTakingDate"
            value={formData.serviceTakingDate}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Special Instructions</label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-lg"
            placeholder="Any special requests, address, or customized service plan?"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600">
          Purchase
        </button>
      </form>
    </div>
  );
};

export default BookNow;
