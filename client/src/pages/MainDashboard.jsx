import React from 'react';
import { useNavigate } from 'react-router-dom';

const modules = [
  {
    id: 1,
    title: 'DJ Booking',
    description: 'Top DJs for your wedding night!',
    image: 'https://source.unsplash.com/300x200/?dj,music',
  },
  {
    id: 2,
    title: 'Food Catering',
    description: 'Delicious menus for every taste.',
    image: 'https://source.unsplash.com/300x200/?wedding,food',
  },
  {
    id: 3,
    title: 'Bridal Makeup Artist',
    description: 'Get that dreamy bridal look.',
    image: 'https://source.unsplash.com/300x200/?bridal,makeup',
  },
  {
    id: 4,
    title: 'Wedding Venue',
    description: 'Find the perfect venue.',
    image: 'https://source.unsplash.com/300x200/?wedding,venue',
  },
  {
    id: 5,
    title: 'Photographer',
    description: 'Capture every magical moment.',
    image: 'https://source.unsplash.com/300x200/?wedding,photographer',
  },
  {
    id: 6,
    title: 'Videographer',
    description: 'Relive your big day in HD!',
    image: 'https://source.unsplash.com/300x200/?wedding,videography',
  },
];

export default function MainDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4">
      <h1 className="text-4xl text-center font-extrabold text-rose-700 mb-10">
        Plan Your Dream Wedding with <span className="text-indigo-600">Weddy</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-white rounded-2xl shadow-md flex flex-col justify-between overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={module.image}
              alt={module.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-rose-700">{module.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{module.description}</p>

              <div className="mt-4">
                <button
                  className="w-full bg-rose-600 hover:bg-rose-500 text-black py-2 px-4 rounded-md transition"
                  onClick={() =>
                    navigate(`/booking/${module.title.toLowerCase().replace(/\s+/g, '-')}`)
                  }
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
