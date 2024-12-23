import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate("/blog"); // Navigate to the blog page
    };

    return (
        <motion.div
            className="flex flex-col md:flex-row justify-between items-center  p-8 rounded-lg shadow-lg max-w-5xl mx-auto my-10bg-white dark:bg-gray-900 text-black dark:text-white my-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Left Section */}
            <div className="w-full md:w-1/2 pr-2 mr-10 mb-6 md:mb-0">
                <motion.h2
                    className="text-3xl font-bold text-gray-800 mb-4"
                    animate={{
                        scale: [1, 1.05, 1], // Scale up slightly and return
                        color: ["#1F2937", "#3B82F6", "#1F2937"], // Shift text color
                    }}
                    transition={{
                        duration: 2, // Time for one full cycle
                        repeat: Infinity, // Repeat forever
                        repeatType: "reverse", // Smooth back-and-forth animation
                    }}
                >
                    About Us
                </motion.h2>

                <p className="text-lg text-gray-600 mb-6">
                    Welcome to our consultation service! We are dedicated to providing the best guidance and support tailored to your needs. Our experienced professionals ensure that you achieve success in every step of your journey with us. Let's build a better future together!
                </p>

                <motion.button
                    onClick={handleLearnMore}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors mb-4 mr-4"
                    whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                </motion.button>

                <a
                    href="https://www.google.com/search?q=consultation+services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    Visit Related Site
                </a>
            </div>

            {/* Right Section (Images with Animation) */}
            <div className="w-full md:w-1/2 pl-4">
                {/* Image 1: Comes from y-axis */}
                <motion.img
                    src="https://i.ibb.co.com/pL9737L/132556.jpg"
                    alt="Image 1"
                    className="w-full md:w-1/2 mb-4 h-32 rounded-t-3xl rounded-br-3xl"
                    animate={{ y: [-10, 50, -10] }} // Move to center position
                    transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}
                />
                {/* Image 2: Comes from x-axis */}
                <motion.img
                    src="https://i.ibb.co.com/cQQst7X/2160.jpg"
                    alt="Image 2"
                    className="w-full md:w-1/2 h-32 rounded-t-3xl rounded-bl-3xl"
                    animate={{ x: [0, 60, 0] }} // Move to center position
                    transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};

export default AboutUs;
