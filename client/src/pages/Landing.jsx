import React from "react";
import Extra from "../components/Extra";
import Footer from "../components/Footer";
import background from "../assets/weds.jpg"; // Make sure this path is correct
import { FaMusic, FaPaintBrush, FaMapMarkerAlt, FaUtensils, FaCamera, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">

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
        <p className="  md:block mt-6 text-white text-2xl font-normal">
          one stop solution for DJ,Catering,Venue,Makeup and more !
        </p>

        {/* Mobile View Categories */}
        <div className="flex flex-col items-center mt-8 space-y-4 md:hidden">
          <div className="flex items-center space-x-2">
            <FaMusic className="text-cyan-400 w-6 h-6" />
            <NavLink to="/djs" className="text-white text-lg hover:underline">
              DJs
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <FaPaintBrush className="text-cyan-400 w-6 h-6" />
            <NavLink to="/makeup-artists" className="text-white text-lg hover:underline">
              Makeup Artists
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-cyan-400 w-6 h-6" />
            <NavLink to="/venues" className="text-white text-lg hover:underline">
              Venues
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <FaUtensils className="text-cyan-400 w-6 h-6" />
            <NavLink to="/caterers" className="text-white text-lg hover:underline">
              Caterers
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <FaCamera className="text-cyan-400 w-6 h-6" />
            <NavLink to="/photographers" className="text-white text-lg hover:underline">
              Photographers
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-cyan-400 w-6 h-6" />
            <NavLink to="/planners" className="text-white text-lg hover:underline">
              Planners
            </NavLink>
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
