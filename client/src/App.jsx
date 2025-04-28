import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import MainDashboard from "./pages/MainDashboard";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";

// Import individual vendor category pages
import Djs from './pages/Djs';
import Planners from './pages/Planners';
import Photographers from './pages/Photographers';
import MakeupArtists from './pages/MakeupArtists';
import Venues from './pages/Venues';
import Caterers from './pages/Caterers';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf7] text-gray-800">
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking/:service"
            element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/confirmation"
            element={
              <ProtectedRoute>
                <Confirmation />
              </ProtectedRoute>
            }
          />

          {/* Add routes for each vendor category page */}
          <Route path="/djs" element={<Djs />} />
          <Route path="/planners" element={<Planners />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/makeup-artists" element={<MakeupArtists />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/caterers" element={<Caterers />} />
        </Routes>
      </main>

      {/* ✅ ToastContainer placed at root */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
