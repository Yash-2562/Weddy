import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import axios from 'axios';
import { motion } from 'framer-motion';



export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Error state

  // Fetch bookings when the component mounts
  useEffect(() => {
    const fetchBookings = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
    

      if (user) {
        try {
          // Dynamically determine API URL based on environment
          const isLocalhost = window.location.hostname === "localhost";
          const API_URL = isLocalhost
            ? "http://localhost:5000"  // Local API URL for development
            : "https://weddy-2.onrender.com";  // Production API URL for Render

          const response = await axios.get(
            `${API_URL}/api/bookings/user/${user.uid}`
            );
             setBookings(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching bookings:", error);
          setError("Failed to load bookings. Please try again later.");
          setLoading(false);
        }
      } else {
        console.log("No user logged in.");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-8 px-6">
  <h2 className="text-3xl font-bold text-center text-rose-600 mb-8 drop-shadow-md">
    My Bookings
  </h2>

  {error && (
    <div className="text-red-600 text-center mb-4">{error}</div>
  )}
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {bookings.length === 0 ? (
      <p className="text-center col-span-full text-lg text-gray-700">
        No bookings yet.
      </p>
    ) : (
      bookings.map((booking) => (
        <motion.div
          key={booking._id}
          className="bg-gradient-to-br from-white via-rose-50 to-pink-100 shadow-xl rounded-2xl p-5 transition-transform transform hover:scale-105 border border-rose-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-2xl font-bold text-rose-700 mb-3 tracking-wide">
            🎉 {booking.service?.replace('-', ' ')}
          </h3>
          <p className="text-gray-700 mb-2"><strong>📍 Location:</strong> {booking.location}</p>
          <p className="text-gray-700 mb-2"><strong>📅 Date:</strong> {booking.date}</p>
          <p className="text-gray-700 mb-2"><strong>👤 Name:</strong> {booking.name}</p>
          <p className="text-gray-700"><strong>📧 Email:</strong> {booking.email}</p>
            
        </motion.div>
        
      ))
    )}
  </div>
</div>

  );
}
