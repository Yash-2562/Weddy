import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import MainDashboard from "./pages/MainDashboard";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { useAuth } from "./context/AuthContext"; // ✅ Correctly import useAuth

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // ✅ Ensure AuthContext is working
  return currentUser ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf7] text-gray-800">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Landing />} />
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
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
