// import React from 'react';
// import HeroSection from '../components/HeroSection';
// import Extra from '../components/Extra';
// import Footer from '../components/Footer';

// export default function Landing() {
//   return (
//     <div className="bg-primary min-h-screen flex flex-col">
      
//       <div className="flex flex-col lg:flex-row p-4">
//         <div className="lg:w-3/4">
//           <HeroSection />
//         </div>
//       </div>
//       <Extra />
//       <Footer />
//     </div>
//   );
// }
// import React from "react";
// import background from "../assets/wedding.jpg"; // uploaded background
//  import Extra from '../components/Extra';
// import Footer from '../components/Footer';

// export default function Landing() {
  

//   return (
//     <div>
     
      

//       <Extra />
//       <Footer />
//     </div>
//   );
// }
// import React from "react";
// import Extra from "../components/Extra";
// import Footer from "../components/Footer";
// import background from "../assets/weds.jpg"; // Make sure this path is correct

// export default function Landing() {
//   return (
//     <div className="flex flex-col min-h-screen">

//       {/* Hero Section */}
//       <div
//         className="flex flex-col items-center justify-center text-center bg-cover bg-center min-h-[80vh] p-8"
//         style={{ backgroundImage: `url(${background})` }}
//       >
//         <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//           Celebrate Love with <span className="text-pink-400">Weddy</span>
//         </h1>
//         <p className="text-white text-lg md:text-2xl max-w-2xl drop-shadow-md">
//           "Where every love story becomes a magical celebration."
//         </p>
//       </div>

//       {/* Extra Section */}
//       <Extra />

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// }
import React from "react";
import Extra from "../components/Extra";
import Footer from "../components/Footer";
import background from "../assets/weds.jpg"; // Make sure this path is correct
import { FaMusic, FaPaintBrush, FaMapMarkerAlt, FaUtensils, FaCamera, FaUsers } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center text-center bg-cover bg-center min-h-[80vh] p-8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Celebrate Love with <span className="text-cyan-400">Weddy</span>
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl drop-shadow-md">
          "Where every love story becomes a magical celebration."
        </p>
        <p className=" text-cyan-400 text-2xl font-extrabold">
          Book now !
        </p>

        {/* Mobile View Categories */}
        <div className="flex flex-col items-center mt-8 space-y-4 md:hidden">
          <div className="flex items-center space-x-2">
            <FaMusic className="text-cyan-400 w-6 h-6" />
            <a href="/djs" className="text-white text-lg hover:underline">
              DJs
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPaintBrush className="text-cyan-400 w-6 h-6" />
            <a href="/makeup-artists" className="text-white text-lg hover:underline">
              Makeup Artists
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-cyan-400 w-6 h-6" />
            <a href="/venues" className="text-white text-lg hover:underline">
              Venues
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaUtensils className="text-cyan-400 w-6 h-6" />
            <a href="/caterers" className="text-white text-lg hover:underline">
              Caterers
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaCamera className="text-cyan-400 w-6 h-6" />
            <a href="/photographers" className="text-white text-lg hover:underline">
              Photographers
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-cyan-400 w-6 h-6" />
            <a href="/planners" className="text-white text-lg hover:underline">
              Planners
            </a>
          </div>
        </div>
      </div>

      {/* Extra Section */}
      <Extra />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}