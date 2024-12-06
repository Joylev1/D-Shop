import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left side: Logo and Address */}
        <div className="flex items-center space-x-4">
          {/* Logo or App Name */}
          <button className="text-xl font-bold text-blue-500  cursor-pointer transition-transform duration-100 hover:scale-105">
            SwipeShop
          </button>

          {/* Address */}
          <div className="hidden md:block text-gray-700">
            <p>Deliver to: 12345 </p>
          </div>
        </div>

        {/* Right side: Cart, Login, Orders, Language Selector */}
        <div className="flex items-center space-x-4 ">
          {/* Language Selector */}
          <select className="border border-gray-300 rounded px-2 py-1 cursor-pointer transition-transform duration-100 hover:scale-105">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>

          {/* Orders */}
          <button className="text-gray-700 hover:text-blue-500 cursor-pointer transition-transform duration-100 hover:scale-105">
            Orders
          </button>

          {/* Cart */}
          <button className="text-gray-700 hover:text-blue-500 cursor-pointer transition-transform duration-100 hover:scale-105">
            Cart
          </button>

          {/* Login */}
          <button className="text-gray-700 hover:text-blue-500 cursor-pointer transition-transform duration-100 hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
