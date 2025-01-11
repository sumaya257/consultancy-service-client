import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://i.ibb.co/HXJfZkb/istockphoto-2174096199-1024x1024.jpg", 
            text: "Personalized Consultancy for Your Success",
        },
        {
            image: "https://i.ibb.co/BBHL7Gn/istockphoto-2169210261-1024x1024.jpg", 
            text: "Professional Guidance for Every Step of Your Journey",
        },
        {
            image: "https://i.ibb.co/f9pHSVQ/istockphoto-1035886582-1024x1024.jpg", 
            text: "Transforming Ideas into Actionable Strategies",
        },
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto Slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 4000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    return (
        <div className="relative w-full h-[400px] overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">
            {/* Slider Container */}
            <div className="absolute inset-0">
                {/* Image Slider */}
                <div className="w-full h-full bg-cover bg-center relative">
                    {slides.map((slide, index) => (
                        <motion.div
                            key={index}
                            className={`w-full h-full bg-cover bg-center absolute ${
                                currentSlide === index ? "block" : "hidden"
                            }`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 4, // Duration for fade effect
                                ease: "easeInOut",
                            }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                <motion.h2
                                    className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5,
                                        ease: "easeOut",
                                    }}
                                >
                                    {slide.text}
                                </motion.h2>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Controls for Navigation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                    onClick={handlePrevSlide}
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    onClick={handleNextSlide}
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Banner;
