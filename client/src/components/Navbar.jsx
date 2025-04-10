import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/auth");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1
        className="text-2xl font-bold text-rose-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Weddy
      </h1>
      <ul className="flex gap-6 text-navy font-medium items-center">
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/our-story")}>Our Story</button>
        </li>
        {user ? (
          <>
            <li className="text-gray-700 capitalize">
  {user.email.split("@")[0]}
</li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={() => navigate("/auth")}
              className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500"
            >
              Login/Signup
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
