import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function BookingPage() {
  const { service } = useParams(); // 👈 updated
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

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
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
          />
          <input
            type="date"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-rose-400"
          />
          <input
            type="text"
            placeholder="Location"
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