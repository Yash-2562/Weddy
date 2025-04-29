import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000); // Redirect to home page after 2 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <svg
            className="w-24 h-24 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-rose-700 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">We’ll get in touch soon with the details. Thank you 💖</p>
      </div>
    </div>
  );
}
