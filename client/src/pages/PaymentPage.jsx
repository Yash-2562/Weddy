import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const navigate = useNavigate();

  const handlePayment = () => {
    setTimeout(() => {
      navigate('/confirmation');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-rose-600 mb-6">Powered by paypal</h2>
      <div className="w-full max-w-sm bg-pink-50 p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Card Number"
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Card Holder Name"
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />
        <button
          onClick={handlePayment}
          className="w-full bg-cyan-600 hover:bg-green-500 text-black py-2 rounded-md"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
