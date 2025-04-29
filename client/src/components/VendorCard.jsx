// // VendorCard.js - This is the reusable card component
// const modules = [
//   {
//     id: 1,
//     title: 'DJ Booking',
//     description: 'Top DJs for your wedding night!',
//     image: Dj,
//   },
//   {
//     id: 2,
//     title: 'Food Catering',
//     description: 'Delicious menus for every taste.',
//     image: food,
//   },
//   {
//     id: 3,
//     title: 'Bridal Makeup Artist',
//     description: 'Get that dreamy bridal look.',
//     image: art,
//   },
//   {
//     id: 4,
//     title: 'Wedding Venue',
//     description: 'Find the perfect venue.',
//     image: saadi,
//   },
//   {
//     id: 5,
//     title: 'Photographer',
//     description: 'Capture every magical moment.',
//     image: photo,
//   },
//   {
//     id: 6,
//     title: 'Wedding planners',
//     description: "Turning your 'I do' into a beautifully planned 'we did'. 💍✨",
//     image: planner,
//   },
// ];



// const VendorCard = ({ name, location, price, imageUrl }) => {
  
//     return (
//       <div className="bg-white  p-4 rounded-lg  shadow-lg">
//         <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md" />
//         <div className="mt-4">
//           <h3 className="text-xl font-semibold">{name}</h3>
//           <p className="text-sm text-gray-500">{location}</p>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <div>
//             <p className="text-lg font-semibold">₹{price}</p>
//             <p className="text-sm text-gray-500">Starting Price</p>
//           </div>
//           <button onClick={} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
//             Book Now
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default VendorCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorCard = ({ name, location, price, imageUrl }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Create a slug from the name, e.g., "DJ Booking" → "dj-booking"
    const serviceSlug = name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/booking/${serviceSlug}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-lg font-semibold">₹{price}</p>
          <p className="text-sm text-gray-500">Starting Price</p>
        </div>
        <button
          onClick={handleBookNow}
          className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VendorCard;
