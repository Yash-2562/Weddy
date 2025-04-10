// client/src/pages/Auth.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // ✅ Import your firebase config
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard"); // ✅ Redirect after login
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/dashboard"); // ✅ Redirect after signup
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold border-b-2 ${
              isLogin ? "border-rose-600 text-rose-600" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-semibold border-b-2 ${
              !isLogin ? "border-rose-600 text-rose-600" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-500 text-black py-2 rounded-md transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>

        {/* Bottom Text */}
        <p className="text-center text-sm mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-rose-600 cursor-pointer font-semibold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
