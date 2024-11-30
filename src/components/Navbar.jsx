import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Sun, Moon, AlignJustify, X } from "lucide-react";
import { changeTheme } from "../redux/theme/themeSlice";

function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(changeTheme(!isDarkMode));
  };

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   console.log(isDarkMode);
  //   document.body.classList.toggle('dark', isDarkMode);
  // };

  return (
    <div className="bg-white flex justify-between items-center py-4 relative">
      <Link
        to="/"
        className={`text-2xl font-bold transition-all duration-300 ${
          isOpenNavbar ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        LumosBlog
      </Link>
      <button
        className="md:hidden transition-all duration-300"
        onClick={toggleNavbar}
        aria-label="Toggle menu"
      >
        <AlignJustify size={24} />
      </button>
      <nav
        className={`fixed md:static top-0 left-0 w-full h-screen md:h-auto bg-white md:bg-transparent z-20 transform transition-transform duration-500 ease-in-out ${
          isOpenNavbar ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 flex flex-col md:flex-row md:justify-end justify-center items-center md:space-x-6 p-4 md:p-0 shadow-md md:shadow-none`}
      >
        <Link to="/" className="block md:hidden text-2xl font-bold mb-8">
          LumosBlog
        </Link>
        <Link
          to="/blog"
          className="block py-2 text-gray-600 hover:text-gray-800 md:inline"
          onClick={() => setIsOpenNavbar(false)}
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="block py-2 text-gray-600 hover:text-gray-800 md:inline"
          onClick={() => setIsOpenNavbar(false)}
        >
          About
        </Link>
        <Link
          to="/newsletter"
          className="block py-2 text-gray-600 hover:text-gray-800 md:inline"
          onClick={() => setIsOpenNavbar(false)}
        >
          Newsletter
        </Link>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden toggle-checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <span className="toggle-slider bg-gray-400 rounded-full w-12 h-6 flex items-center">
            <span
              className={`toggle-icon bg-white rounded-full w-5 h-5 transition-transform ${
                isDarkMode ? "transform translate-x-6" : ""
              }`}
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-gray-800 dark:text-gray-200 mx-auto" />
              ) : (
                <Sun className="w-4 h-4 text-gray-800 dark:text-gray-200 mx-auto" />
              )}
            </span>
          </span>
        </label>
        {/* <button
          className="block py-2 text-gray-600 hover:text-gray-800 focus:outline-none md:inline"
          onClick={() => alert("Toggle dark mode")}
        >
          <Moon size={24} />
        </button> */}
        <button
          className="block mt-auto md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleNavbar}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
