import React from "react";
import { Link } from "react-router-dom";
import { Moon } from "lucide-react";

function Navbar() {
  return (
    <>
      <Link to="/" className="text-2xl font-bold">
        LumosBlog
      </Link>
      <nav className="space-x-6">
        <Link to="/blog" className="text-gray-600 hover:text-gray-800">
          Blog
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-800">
          About
        </Link>
        <Link to="/newsletter" className="text-gray-600 hover:text-gray-800">
          Newsletter
        </Link>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <Moon size={24} className="text-gray-600"/>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
