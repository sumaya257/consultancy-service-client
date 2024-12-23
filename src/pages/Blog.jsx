import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
    return (
        <motion.div
            className="bg-gray-100 py-16 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-screen-lg mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-gray-800 mb-8"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Learn More About Our Consultancy Services
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Personalized Guidance
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Our consultancy services are tailored to your unique needs. We help you navigate the complexities of your journey and provide actionable strategies for success. No matter your industry, we offer practical advice that aligns with your goals.
                        </p>
                        <motion.button
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            Read More
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Expert Insights
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Our team of experts offers deep industry insights and strategies to ensure you're on the right path. We use data-driven methods to analyze your situation and provide clear recommendations that drive real results.
                        </p>
                        <motion.button
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            Read More
                        </motion.button>
                    </motion.div>
                </div>

                <div className="mt-12">
                    <motion.h2
                        className="text-3xl font-semibold text-center text-gray-800 mb-8"
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Why Choose Us?
                    </motion.h2>

                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-md mx-auto">
                        <p className="text-lg text-gray-600 mb-6">
                            Our consultancy service is not just about offering advice — it's about creating a partnership. We understand the challenges you face and work with you every step of the way to develop solutions that matter. From growth strategies to operational improvements, we bring expertise and innovation to help you succeed.
                        </p>

                        <motion.button
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            Contact Us Today
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;
