import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-700 pt-10 pb-5 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-cyan-500 mb-2">
          <FaHeart className="inline-block align-middle text-red-500 mr-2" />Weddy</h1>
          {/* <p className="text-sm text-gray-500 text-center md:text-left">
            from Matrimony.com group
          </p> */}
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center md:text-left text-sm w-full">
          {/* Know about us */}
          <div>
            <h3 className="font-semibold mb-3">Know about us</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="font-semibold mb-3">Other Services</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Mandap</a>
              </li>
              <li>
                <a href="#">Make My Wedding</a>
              </li>
            </ul>
          </div>

          {/* You need to know */}
          <div>
            <h3 className="font-semibold mb-3">You need to know</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Wedding Guest Post</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="font-semibold mb-3">Follow us on</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#">
                <FaInstagram size={20} />
              </a>
              <a href="#">
                <FaFacebookF size={20} />
              </a>
              <a href="#">
                <FaPinterestP size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t pt-4 text-center text-xs text-gray-500">
        © Copyright 2025 Weddy - All Rights Reserved
      </div>
    </footer>
  );
}
