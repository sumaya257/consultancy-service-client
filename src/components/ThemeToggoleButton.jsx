// src/components/ThemeToggleButton.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';  // Import the theme context hook
import { MdOutlineDarkMode } from "react-icons/md"

const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();  // Use the useTheme hook to access the theme state

  return (
    <button
          onClick={toggleTheme}
          className={`p-2 rounded-full mr-2 ${isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
          <MdOutlineDarkMode size={24} />
        </button>
  );
};

export default ThemeToggleButton;
