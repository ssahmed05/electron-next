// app/components/Header.js
"use client";

import { useState, useContext } from 'react';
import { FaBell, FaUserCircle, FaAdjust } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'black' ? 'light' : 'black');
  };

  return (
    <header className={`w-full p-4 ${theme === 'black' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} flex justify-between items-center shadow-md`}>
      <h1 className="text-xl font-bold">App name</h1>
      <nav className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="p-2 focus:outline-none">
          <FaAdjust className="text-2xl" />
        </button>

        {/* Notification Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('notification')}
            className="p-2 focus:outline-none"
          >
            <FaBell className="text-2xl" />
          </button>
          {activeDropdown === 'notification' && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <ul className="p-2">
                <li className="p-2 border-b hover:bg-gray-100">Notification 1</li>
                <li className="p-2 border-b hover:bg-gray-100">Notification 2</li>
                <li className="p-2 hover:bg-gray-100">Notification 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('profile')}
            className="p-2 focus:outline-none"
          >
            <FaUserCircle className="text-2xl" />
          </button>
          {activeDropdown === 'profile' && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <ul className="p-2">
                <li className="p-2 border-b hover:bg-gray-100">Edit Profile</li>
                <li className="p-2 hover:bg-gray-100">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
