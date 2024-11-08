// app/context/AuthContext.js
"use client";

import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loader/Loading';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // To store user details
  const [loading, setLoading] = useState(true); // To manage loading state during auth check
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated and load user details
    const token = localStorage.getItem('authToken');
    const userDetails = localStorage.getItem('userDetails');

    if (token && userDetails) {
      setAuthenticated(true);
      setUser(JSON.parse(userDetails)); // Load user details from local storage
    } else {
      setAuthenticated(false);
      setUser(null);
    }

    setLoading(false); // Mark the loading as complete
  }, [router]);

  const login = (token, userDetails) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    setAuthenticated(true);
    setUser(userDetails);
    router.push('/'); // Redirect after login (can customize based on your application)
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
    setAuthenticated(false);
    setUser(null);
    router.push('/login'); // Redirect to login page
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
