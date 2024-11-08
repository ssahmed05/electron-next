"use client";

import { useContext, useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import GuestLayout from "./GuestLayout";
import { AuthContext } from "@/app/context/AuthContext";
import LoginPage from "@/app/login/page";
import Loading from "../Loader/Loading";

export default function LayoutHandler({ children }) {
  const { authenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once the authentication status is known
    setLoading(false);
  }, [authenticated]);

  if (loading) {
    // Display loading indicator while checking authentication
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>

    )
  }

  if (!authenticated) {
    // Show guest layout with login page if not authenticated
    return (
      <div className="w-full p-8">
        <GuestLayout>
          <LoginPage />
        </GuestLayout>
      </div>
    );
  }

  // Show authenticated layout once authenticated
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
