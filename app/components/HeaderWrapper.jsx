"use client";

import { useState, useContext, useEffect } from 'react';
import Header from "./Header";
import { useRouter } from 'next/navigation';

export default function HeaderWrapper() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthenticated(true);
    } else {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [router]);

  if (!authenticated) {
    // Don't render anything until authentication is checked.
    return null;
  }

  return <Header />;
}
