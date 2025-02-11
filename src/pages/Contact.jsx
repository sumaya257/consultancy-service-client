import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            
            // Show SweetAlert on form submission
            Swal.fire({
                icon: 'success',
                title: 'message Submitted Successfully',
                text: `Thank you for reaching out, ${name}!`,
                confirmButtonText: 'Close'
            });
            
            // Handle form submission logic here (like sending it to an API)
            console.log('Form submitted', { name, email, message });
            
            // Clear form fields after submission
            setName('');
            setEmail('');
            setMessage('');
        };
    
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white min-h-screen py-12 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        We’d love to hear from you! Please fill out the form below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Send Us a Message</h3>
                        <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                    <label htmlFor="name" className="label">
                        <span>Name</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="input input-bordered w-full bg-white dark:bg-gray-800"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label htmlFor="email" className="label">
                        <span className="">Email</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input input-bordered w-full  bg-white dark:bg-gray-800"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label htmlFor="message" className="label">
                        <span className="">Message</span>
                    </label>
                    <textarea
                        id="message"
                        className="textarea textarea-bordered w-full  bg-white dark:bg-gray-800"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-32 mt-4 mx-auto"
                >
                    Send
                </button>
            </form>
                    </div>

                    {/* Map Section */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Find Us Here</h3>
                        <div className="h-64 bg-gray-200 rounded-lg">
                            {/* Google Maps Embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.865049209931!2d144.96303231586877!3d-37.81699877975172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5d9dbbd7b1%3A0x5045675218ce7e0!2sMelbourne%20Central!5e0!3m2!1sen!2sus!4v1605827776944!5m2!1sen!2sus"
                                className="w-full h-full border-0 rounded-lg"
                                title="Google Maps Location"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
