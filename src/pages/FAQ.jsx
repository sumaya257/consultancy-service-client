import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the purpose of this website?",
            answer: "This website serves as a platform to share eco-friendly adventure experiences and tips."
        },
        {
            question: "How do I sign up?",
            answer: "You can sign up by clicking on the 'Sign Up' button in the navigation bar and filling out the form."
        },
        {
            question: "Can I contribute content?",
            answer: "Yes, you can contribute blog posts by becoming a registered user and submitting your content."
        },
        {
            question: "How do I contact support?",
            answer: "You can contact us through the 'Contact Us' page, and we will get back to you as soon as possible."
        }
    ];

    return (
        <section className="p-8 max-w-7xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg my-10">
            <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="border-b border-gray-300 dark:border-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div
                            onClick={() => toggleQuestion(index)}
                            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
                        >
                            <h3 className="text-lg font-semibold">{item.question}</h3>
                            <span className={`text-xl transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </div>
                        {activeIndex === index && (
                            <motion.div
                                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{item.answer}</p>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
