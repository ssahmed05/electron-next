// app/components/SidebarWrapper.js
"use client";

import { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";

export default function SidebarWrapper() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setAuthenticated(!!token);
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem('authToken');
            setAuthenticated(!!token);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    if (!authenticated) {
        return null; // Don't render the sidebar if not authenticated
    }

    return <Sidebar />;
}
