import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Show SweetAlert on form submission
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully',
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
        <section className='p-8 rounded-lg shadow-lg max-w-7xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white my-10'>
            <h2 className='text-3xl font-semibold text-center mb-8'>Contact Us</h2>
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
                    className="btn bg-blue-500 text-white w-32 mt-4 mx-auto"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default ContactUs;
