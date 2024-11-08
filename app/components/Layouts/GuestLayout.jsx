"use client";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8">
        {children}
      </div>
    </div>
  );
}
