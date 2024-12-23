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
            className="md:flex justify-between items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl mx-auto my-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Left Section */}
            <div className="md:w-1/2 pr-4">
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
            <div className="md:w-1/2 pl-4 relative">
                {/* Image 1: Comes from top-left */}
                <motion.img
                    src="image1.jpg" 
                    alt="Image 1"
                    className="w-1/2 mb-4 absolute"
                    initial={{ x: "-100%", y: "-100%" }} // Off-screen top-left
                    animate={{ x: 0, y: 0 }} // Move to center position
                    transition={{ duration: 1, ease: "easeOut" }}
                />
                {/* Image 2: Comes from bottom-right */}
                <motion.img
                    src="image2.jpg" 
                    alt="Image 2"
                    className="w-1/2 absolute"
                    initial={{ x: "100%", y: "100%" }} // Off-screen bottom-right
                    animate={{ x: 0, y: 0 }} // Move to center position
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};

export default AboutUs;
