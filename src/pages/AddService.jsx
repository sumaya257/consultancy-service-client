import React from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Extract form data as an object
        const formData = new FormData(e.target); // `e.target` is the form element
        const serviceData = Object.fromEntries(formData.entries());
        console.log(serviceData)

        // Validation: Ensure all fields are filled
        for (const key in serviceData) {
            if (!serviceData[key].trim()) {
                Swal.fire({
                    icon: 'error',
                    title: 'Validation Error',
                    text: 'All fields are required!',
                    confirmButtonText: 'OK',
                });
                return;
            }
        }
    };
     // Send the data using Axios POST request
     axios
     .post('/api/add-service', serviceData)  // Replace with your API endpoint
     .then((response) => {
         Swal.fire({
             icon: 'success',
             title: 'Success',
             text: 'Service has been added successfully!',
             confirmButtonText: 'OK',
         });

         // Reset the form after successful submission
         e.target.reset();
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


    return (
        <div className="p-8 max-w-5xl mx-auto shadow-lg my-10 border rounded-lg hover:border-blue-500 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4">Add a New Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Image URL Field */}
                <div className="form-control">
                    <label className="label">Image URL</label>
                    <input
                        name="imageURL"
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter image URL"
                    />
                </div>

                {/* Service Name Field */}
                <div className="form-control">
                    <label className="label">Service Name</label>
                    <input
                        name="serviceName"
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter service name"
                    />
                </div>

                {/* Price Field */}
                <div className="form-control">
                    <label className="label">Price</label>
                    <input
                        name="price"
                        type="number"
                        className="input input-bordered w-full"
                        placeholder="Enter price"
                    />
                </div>

                {/* Service Area Field */}
                <div className="form-control">
                    <label className="label">Service Area</label>
                    <select
                        name="serviceArea"
                        className="select select-bordered w-full"
                    >
                        <option value="" disabled>Select the Service Area</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Rangpur">Rangpur</option>
                    </select>
                </div>

                {/* Description Field */}
                <div className="form-control">
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter description"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-primary mt-4"
                >
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;