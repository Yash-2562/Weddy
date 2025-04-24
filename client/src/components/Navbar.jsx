// import React, { useEffect, useState } from "react";
// import { auth } from "../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//     navigate("/auth");
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
//       <h1
//         className="text-2xl font-bold text-rose-600 cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         Weddy
//       </h1>
//       <ul className="flex gap-6 text-navy font-medium items-center">
//         <li>
//           <button onClick={() => navigate("/")}>Home</button>
//         </li>
//         <li>
//           <button onClick={() => navigate("/our-story")}>Our Story</button>
//         </li>
//         {user ? (
//           <>
//             <li className="text-gray-700 capitalize">
//   {user.email.split("@")[0]}
// </li>
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500"
//               >
//                 Logout
//               </button>
//             </li>
//           </>
//         ) : (
//           <li>
//             <button
//               onClick={() => navigate("/auth")}
//               className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500"
//             >
//               Login/Signup
//             </button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-50">
      <h1
        className="text-2xl font-bold text-rose-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Weddy
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-6 text-navy font-medium items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-rose-600 font-semibold border-b-2 border-rose-600 pb-1"
                : "text-gray-700 hover:text-rose-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/our-story"
            className={({ isActive }) =>
              isActive
                ? "text-rose-600 font-semibold border-b-2 border-rose-600 pb-1"
                : "text-gray-700 hover:text-rose-500"
            }
          >
            Our Story
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-600 font-semibold border-b-2 border-rose-600 pb-1"
                  : "text-gray-700 hover:text-rose-500"
              }
            >
              Explore
            </NavLink>
          </li>
        )}
        {user ? (
          <li className="relative group">
            <div className="w-9 h-9 flex items-center justify-center bg-pink-600 text-black rounded-full cursor-pointer uppercase">
              {user.email.charAt(0)}
            </div>
            <ul className="absolute hidden group-hover:flex flex-col top-10 right-0 bg-white shadow-md rounded-md py-2 min-w-[120px] text-sm z-50">
              <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li
                onClick={handleLogout}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </li>
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

      {/* Hamburger Menu Toggle */}
      <button
        className="lg:hidden text-rose-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="absolute right-6 top-16 bg-white shadow-lg rounded-md w-48 py-4 px-6 flex flex-col gap-4 text-gray-700 font-medium z-40">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-rose-600 font-semibold border-b-2 border-rose-600 pb-1"
                  : "hover:text-rose-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-story"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-rose-600 font-semibold border-b-2 border-rose-600 pb-1"
                  : "hover:text-rose-500"
              }
            >
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
                    ? "text-rose-600 font-semibold border-b-2 border-rose-600 pb-1"
                    : "hover:text-rose-500"
                }
              >
                Explore
              </NavLink>
            </li>
          )}
          {user ? (
            <>
              <li className="capitalize">{user.email.split("@")[0]}</li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  navigate("/auth");
                  setMenuOpen(false);
                }}
                className="bg-rose-600 text-black px-4 py-1.5 rounded-md hover:bg-rose-500 w-full text-left"
              >
                Login/Signup
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
