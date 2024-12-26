import React from 'react';
import { motion } from 'framer-motion';

const OurHappyCustomers = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'https://i.ibb.co.com/QN6H54g/1.jpg',
      feedback: 'Great service! The business strategy consulting helped us double our revenue in just six months..',
    },
    {
      name: 'Jane Smith',
      image: 'https://i.ibb.co.com/sbvFNPM/48.jpg',
      feedback: 'Amazing experience! I highly recommend their services for any business looking to grow..',
    },
    {
      name: 'Michael Brown',
      image: 'https://i.ibb.co.com/YcCYKN4/15.jpg',
      feedback: 'The team was very professional and delivered beyond our expectations. Highly satisfied!',
    },
  ];

  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            color: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'], // Set the color change cycle
          }}
          transition={{
            duration: 3,
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: 'loop', // Loop the animation
            ease: 'easeInOut', // Smooth transition
            times: [0, 0.25, 0.5, 0.75, 1], // Control timing of colors
          }}
        >
          Our Happy Customers
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurHappyCustomers;
