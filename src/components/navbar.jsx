import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-2 border-t-4 border-green-500 bg-white font-sans">
      
      {/* Logo */}
      <div className="text-[22px] font-bold text-violet-700">
        DigiTools
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm text-gray-700">
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Testimonials</li>
        <li className="cursor-pointer">FAQ</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
          🛒 Login
        </span>

        <button className="bg-violet-700 text-white text-sm px-4 py-2 rounded-full hover:bg-violet-800 transition">
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;