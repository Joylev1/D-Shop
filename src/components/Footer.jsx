// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About SwipeShop</h2>
          <p className="text-sm">
            SwipeShop is a unique e-commerce platform where you personalize your shopping experience by selecting what you like and dislike.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="/categories" className="hover:text-blue-400">Categories</a>
            </li>
            <li>
              <a href="/deals" className="hover:text-blue-400">Deals</a>
            </li>
            <li>
              <a href="/wishlist" className="hover:text-blue-400">Wishlist</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="hover:text-blue-400">Contact Us</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400">FAQ</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-400">Facebook</a>
            <a href="https://instagram.com" className="hover:text-pink-400">Instagram</a>
            <a href="https://twitter.com" className="hover:text-blue-300">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 SwipeShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
