import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import useTitle from '../customHooks/useTitle';

const BookNow = () => {
  useTitle('Book Now - Guideline Grove');
  const { id } = useParams(); // Get the service id from URL
  const { services, user } = useContext(AuthContext); // Get services and currentUser from context

  // Find the service matching the id
  const service = services.find((s) => s._id === id);

  // State for form data
  const [formData, setFormData] = useState({
    serviceTakingDate: '',
    specialInstructions: '',
  });

  // Handle input changes for editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create a new FormData object
    const formData = new FormData(event.target);
  
    // Convert FormData to an object
    const data = Object.fromEntries(formData.entries());
  
    // Manually add non-editable fields to the data object
    data.serviceID = service._id;
    data.serviceName = service.serviceName;
    data.serviceImage = service.imageURL;
    data.servicePrice = service.price;
    data.serviceProviderName = service.serviceProviderName;
    data.serviceProviderEmail = service.serviceProviderEmail;
    data.currentUserName = user?.displayName || "N/A";
    data.currentUserEmail = user?.email || "N/A";
    data.serviceStatus  = 'pending';
  
     // Send the data using Axios POST request
     axios
     .post('http://localhost:5000/purchased-items', data)
     .then((response) => {
        //  console.log(response.data)
         Swal.fire({
             icon: 'success',
             title: 'Success',
             text: 'purchasing request has been added successfully!',
             confirmButtonText: 'OK',
         });
         // Reset the form by clearing the state
        setFormData({
            serviceTakingDate: "",
            specialInstructions: "",
          });
        })
     .catch((error) => {
         Swal.fire({
             icon: 'error',
             title: 'Error',
             text: 'There was an error while adding the service.',
             confirmButtonText: 'OK',
         });
         console.error('Error adding service:', error);
     });
  
    
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
