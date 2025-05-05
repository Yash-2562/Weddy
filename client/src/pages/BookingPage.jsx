// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function BookingPage() {
//   const { service } = useParams(); // 👈 updated
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     navigate('/payment');
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
//         <h2 className="text-3xl font-bold text-rose-600 mb-6 capitalize text-center">
//           Book {service?.replace('-', ' ')}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <input
//             type="date"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <button
//             type="submit"
//             className="w-full bg-cyan-600 hover:bg-green-500 text-white py-2 rounded-lg"
//           >
//             Proceed to Payment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function BookingPage() {
//   const { service } = useParams(); // 👈 updated
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/payment');
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
//         <h2 className="text-3xl font-bold text-rose-600 mb-6 capitalize text-center">
//           Book {service?.replace('-', ' ')}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <input
//             type="date"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
//           />
//           <button
//             type="submit"
//             className="w-full bg-cyan-600 hover:bg-green-500 text-white py-2 rounded-lg"
//           >
//             Proceed to Payment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BookingPage() {
  const { service } = useParams();
  const navigate = useNavigate();

  // State to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      email,
      date,
      location,
      service,
    };

    try {
      // ✅ Auto-detect API URL based on environment
      const isLocalhost = window.location.hostname === "localhost";
      const API_URL = isLocalhost
        ? "http://localhost:5000"
        : "https://weddy-2.onrender.com";  // 👈 replace with your actual Render URL
    
      const response = await axios.post(
        `${API_URL}/api/bookings`,
        bookingData
      );
    
      console.log(response.data); // Optional: log success
      navigate("/payment"); // Redirect to payment page after booking is saved
    } catch (error) {
      console.error("Error saving booking:", error.response || error);
      alert("Failed to save booking!");
    }
    

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-rose-600 mb-6 capitalize text-center">
          Book {service?.replace('-', ' ')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-green-500 text-white py-2 rounded-lg"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
