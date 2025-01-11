import React from 'react';

const HowItWorks = () => {
    return (
        <section className='p-8 rounded-lg shadow-lg max-w-7xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white'>
            <h2 className='text-3xl font-semibold mb-8 text-center'>How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card bg-base-100 dark:bg-gray-900 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-xl font-semibold">Step 1: Sign Up</h3>
                        <p>Create an account with us to get started!</p>
                    </div>
                </div>
                <div className="card bg-base-100 dark:bg-gray-900 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-xl font-semibold">Step 2: Choose Your Service</h3>
                        <p>Pick from a variety of services tailored to your needs.</p>
                    </div>
                </div>
                <div className="card bg-base-100 dark:bg-gray-900 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-xl font-semibold">Step 3: Book & Pay</h3>
                        <p>Schedule your service and make payments easily.</p>
                    </div>
                </div>
                <div className="card bg-base-100 dark:bg-gray-900 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-xl font-semibold">Step 4: Enjoy Your Service</h3>
                        <p>Experience top-quality service from the best professionals.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
