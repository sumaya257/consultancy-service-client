// src/components/ThemeToggleButton.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';  // Import the theme context hook

const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();  // Use the useTheme hook to access the theme state

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-4 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;
