import React from 'react';

import { ShoppingCart, Play } from "lucide-react";

const NavbarHero = () => {
  return (
    <>
    <div className=" min-h-screen">

      <nav className="flex items-center justify-between px-10 py-5">

        <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>


        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-purple-600">Products</li>
          <li className="cursor-pointer hover:text-purple-600">Features</li>
          <li className="cursor-pointer hover:text-purple-600">Pricing</li>
          <li className="cursor-pointer hover:text-purple-600">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-600">FAQ</li>
        </ul>


        <div className="flex items-center gap-5">
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
          <button className="text-gray-700 font-medium hover:text-purple-600">
            Login
          </button>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
            • New: AI-Powered Tools Available
          </span>

          <h2 className="text-5xl font-bold text-gray-800 mt-6 leading-tight">
            Supercharge Your Digital Workflow
          </h2>

          <p className="text-gray-600 mt-5">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[500px] h-[350px] bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="/src/assets/banner.png"
            alt="Hero"
            className="object-cover w-full h-full opacity-90" />
        </div>
      </section>

      <section className="px-10 py-16">
        <h2 className='text-4xl font-bold text-gray-800'>Premium Digital Tools</h2>
        <p className='text-gray-600 mt-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p> 
      </section>
    </div>
      <div className="px-10 py-16">
        <h2 className='text-4xl font-bold text-gray-800'>Premium Digital Tools</h2>
        <p className='text-gray-600 mt-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p> 
      </div>
  </>

  );
};
export default NavbarHero;