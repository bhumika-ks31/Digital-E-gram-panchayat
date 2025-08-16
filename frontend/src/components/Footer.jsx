import React from "react";
import logo from "../assets/E-gram.jpg"; // Apne logo ka path sahi rakhna

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-8">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <img
              src={logo}
              alt="E-Gram Logo"
              className="w-10 h-10 object-cover rounded-full border-2 border-white"
            />
            <h2 className="text-xl font-bold">E-Gram</h2>
          </div>
          <p className="text-gray-200 text-sm leading-snug">
            Empowering rural communities through digital services,  
            government schemes, and e-connectivity.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-base font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1 text-sm">
            <li>📄 Birth & Death Certificates</li>
            <li>💳 Aadhaar & PAN Services</li>
            <li>🏦 Banking Assistance</li>
            <li>📚 Govt Scheme Applications</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-200 text-sm">📍 Main Market Road, Jhunjhunu, Rajasthan</p>
          <p className="text-gray-200 text-sm">📞 +91 98765 43210</p>
          <p className="text-gray-200 text-sm">📧 support@egram.com</p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-green-900 text-center py-2 text-xs text-gray-300">
        © {new Date().getFullYear()} E-Gram | By <span className="font-semibold">Bhumika Kashyap</span>. All rights reserved.
      </div>
    </footer>
  );
}
