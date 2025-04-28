import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/logow.png'; // Import your logo image
export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [vendorOpen, setVendorOpen] = useState(false);
  const navigate = useNavigate();
  const categories = [
    { name: 'Makeup Artists', icon: '💄' },
    { name: 'Planners', icon: '📝' },
    { name: 'Decorators', icon: '🎀' },
    { name: 'Caterers', icon: '🍽️' },
    { name: 'Jewellery', icon: '💍' },
    { name: 'Wedding Wear', icon: '👗' },
    { name: 'Entertainment', icon: '🎶' },
    { name: 'Photographers', icon: '📸' },
    { name: 'Venues', icon: '🏛️' },
    { name: 'Mehendi Artists', icon: '🌿' },
    { name: 'DJs', icon: '🎧' },
    { name: 'Car Rentals', icon: '🚗' },
    { name: 'Choreographers', icon: '💃' },
    { name: 'Honeymoon', icon: '🏖️' },
  ];
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/auth');
  };
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-50">
      {' '}
      {/* Logo and Brand */}{' '}
      <div
        className="flex mx-5 items-center gap-2 cursor-pointer group"
        onClick={() => navigate('/')}>
        {' '}
        <img
          src={Logo}
          alt="Weddy Logo"
          className="h-10 w-10  object-contain transition-transform duration-300 group-hover:scale-110"
        />{' '}
        <span className="text-3xl  font-extrabold text-cyan-600">Weddy</span>{' '}
      </div>
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-6 text-navy font-medium items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-rose-600 font-semibold border-b-2 border-rose-600 pb-1'
                : 'text-gray-700 hover:text-rose-500'
            }>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/our-story"
            className={({ isActive }) =>
              isActive
                ? 'text-rose-600 font-semibold border-b-2 border-rose-600 pb-1'
                : 'text-gray-700 hover:text-rose-500'
            }>
            Our Story
          </NavLink>
        </li>

        {/* Vendors with Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setVendorOpen(true)}
          onMouseLeave={() => setVendorOpen(false)}>
          <div className="flex items-center cursor-pointer text-gray-700 hover:text-rose-500">
            Vendors <ChevronDown className="ml-1 h-4 w-4" />
          </div>

          {vendorOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-4 max-h-96 overflow-y-auto transition-all">
              {categories.map((item, index) => (
                <NavLink
                  to={`/${item.name.toLowerCase().replace(/ /g, '-')}`}
                  key={index}
                  className="flex items-center gap-2 hover:text-cyan-600">
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </NavLink>
              ))}
              <div className="col-span-2 mt-4">
                <NavLink
                  to="/vendor-register"
                  className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md text-sm font-semibold">
                  I am a Vendor | Register Now
                </NavLink>
              </div>
            </div>
          )}
        </li>

        {/* Explore link when user is logged in */}
        {user && (
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-rose-600 font-semibold border-b-2 border-rose-600 pb-1'
                  : 'text-gray-700 hover:text-rose-500'
              }>
              Explore
            </NavLink>
          </li>
        )}

        {/* Profile Icon or Login Button */}
        {user ? (
          <li className="relative group">
            <div className="w-9 mr-5 h-9 flex items-center justify-center bg-cyan-600 text-white rounded-full cursor-pointer uppercase">
              {user.email.charAt(0)}
            </div>
            <ul className="absolute hidden group-hover:flex flex-col top-10 right-0 bg-white shadow-md rounded-md py-2 min-w-[120px] text-sm z-50">
              <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li
                onClick={handleLogout}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </li>
        ) : (
          <li>
            <button
              onClick={() => navigate('/auth')}
              className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500">
              Login/Signup
            </button>
          </li>
        )}
      </ul>
      {/* Mobile Navigation */}
      <button className="lg:hidden text-rose-600" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {menuOpen && (
        <ul className="absolute right-6 top-16 bg-white shadow-lg rounded-md w-48 py-4 px-6 flex flex-col gap-4 text-gray-700 font-medium z-40">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-rose-600 font-semibold border-b-2 border-rose-600 pb-1'
                  : 'hover:text-rose-500'
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-story"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-rose-600 font-semibold border-b-2 border-rose-600 pb-1'
                  : 'hover:text-rose-500'
              }>
              Our Story
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-rose-600 font-semibold border-b-2 border-rose-600 pb-1'
                    : 'hover:text-rose-500'
                }>
                Explore
              </NavLink>
            </li>
          )}
          {user ? (
            <>
              <li className="capitalize">{user.email.split('@')[0]}</li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500 w-full text-left">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  navigate('/auth');
                  setMenuOpen(false);
                }}
                className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500 w-full text-left">
                Login/Signup
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
