import React from 'react';
import heroImg from '../assets/Wedding-amico.png';
export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row bg-primary p-6 min-h-[80vh]">
      <div className="w-full lg:w-1/2 flex justify-center items-center">
      <img src={heroImg} alt="Couple" className="rounded-lg w-80" />

      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left p-6 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-navy mb-4">She Said Yes!</h2>
        <p className="text-lg mb-6">Join us as we celebrate our love story.</p>
        <button className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-500 transition">RSVP Now</button>
      </div>
    </div>
  );
}
