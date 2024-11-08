"use client";

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import HeaderWrapper from '../HeaderWrapper';
import SidebarWrapper from '../SidebarWrapper';
import { AuthContext } from '@/app/context/AuthContext';

export default function AuthLayout({ children }) {
  const { authenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [authenticated, router]);

  if (!authenticated) {
    // Don't render anything until authentication is checked
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <HeaderWrapper />
      <div className="flex flex-1">
        <SidebarWrapper />
        <div className="p-8 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
