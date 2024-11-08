// app/components/Sidebar.js
"use client";

import { useState, useContext } from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaEnvelope, FaUsers, FaBriefcase, FaHistory, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

export default function Sidebar() {
  // State to manage dropdown visibility
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Define theme classes for black and light themes with gradient backgrounds
  const themeClasses = {
    black: {
      background: 'bg-gradient-to-b from-gray-800 via-gray-900 to-black',
      text: 'text-white',
      accent: 'text-blue-400',
      hover: 'hover:bg-gray-700',
      elevation: 'shadow-2xl',
      border: 'border border-gray-700',
    },
    light: {
      background: 'bg-gradient-to-br from-white to-gray-200',
      text: 'text-gray-800',
      accent: 'text-blue-600',
      hover: 'hover:bg-gray-300',
      elevation: 'shadow-md',
      border: 'border border-gray-300',
    },
  };

  // Apply the current theme styles
  const currentTheme = themeClasses[theme];

  return (
    <div className={`h-screen w-64 ${currentTheme.background} ${currentTheme.text} p-4 ${currentTheme.elevation} ${currentTheme.border}`}>      

      <nav className="space-y-4">
        <Link href="/" className={`flex items-center p-2 rounded-md ${currentTheme.hover} transition-colors`}>
          <FaHome className={`mr-3 ${currentTheme.accent}`} />
          <span>Home</span>
        </Link>

        {/* About Us Link with Dropdown */}
        <div>
          <button
            onClick={() => setAboutDropdownOpen(!isAboutDropdownOpen)}
            className={`flex items-center w-full p-2 rounded-md ${currentTheme.hover} transition-colors`}
          >
            <FaInfoCircle className={`mr-3 ${currentTheme.accent}`} />
            <span>About Us</span>
            <span className="ml-auto">
              {isAboutDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {isAboutDropdownOpen && (
            <div className="ml-8 mt-2 space-y-2">
              <Link href="/about/history" className={`flex items-center p-2 rounded-md ${currentTheme.hover} transition-colors`}>
                <FaHistory className={`mr-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`} />
                <span>History</span>
              </Link>
              <Link href="/about/mission" className={`flex items-center p-2 rounded-md ${currentTheme.hover} transition-colors`}>
                <FaBriefcase className={`mr-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`} />
                <span>Mission</span>
              </Link>
              <Link href="/about/team" className={`flex items-center p-2 rounded-md ${currentTheme.hover} transition-colors`}>
                <FaUsers className={`mr-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`} />
                <span>Team</span>
              </Link>
            </div>
          )}
        </div>

        {/* Contact Us Link with Dropdown */}
        <div>
          <button
            onClick={() => setContactDropdownOpen(!isContactDropdownOpen)}
            className={`flex items-center w-full p-2 rounded-md ${currentTheme.hover} transition-colors`}
          >
            <FaEnvelope className={`mr-3 ${currentTheme.accent}`} />
            <span>Contact Us</span>
            <span className="ml-auto">
              {isContactDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {isContactDropdownOpen && (
            <div className="ml-8 mt-2 space-y-2">
              <Link href="/contact/sales" className={`flex items-center p-2 rounded-md ${currentTheme.hover} transition-colors`}>
                <FaBriefcase className={`mr-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`} />
                <span>Sales</span>
              </Link>
              <Link href="/contact/press" className={`flex items-center p-2 rounded-md ${currentTheme.hover} transition-colors`}>
                <FaInfoCircle className={`mr-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`} />
                <span>Press</span>
              </Link>
              <Link href="/contact/support" className={`flex items-center p-2 rounded-md ${currentTheme.hover} transition-colors`}>
                <FaUsers className={`mr-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`} />
                <span>Support</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
