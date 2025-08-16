import React from "react";
import logo from "../assets/E-gram.jpg"; // Apna logo path sahi rakhna

export default function Contact() {
  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 animate-fadeIn">
        
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="E-Gram Logo"
            className="w-24 h-24 object-cover rounded-full border-4 border-green-500 shadow-md mb-3"
          />
          <h1 className="text-3xl font-bold text-green-600">Contact Us</h1>
          <p className="text-gray-600 text-center mt-1">
            We’re here to help! Reach out to us anytime.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center transition hover:shadow-lg hover:scale-105">
            <h2 className="text-lg font-semibold text-green-700 mb-2">📍 Address</h2>
            <p className="text-gray-700">
              E-Gram Seva Kendra <br />
              Main Market Road, Jhunjhunu, Rajasthan
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center transition hover:shadow-lg hover:scale-105">
            <h2 className="text-lg font-semibold text-green-700 mb-2">📞 Phone</h2>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center transition hover:shadow-lg hover:scale-105">
            <h2 className="text-lg font-semibold text-green-700 mb-2">📧 Email</h2>
            <p className="text-gray-700">support@egram.com</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md border mb-6">
          <iframe
            title="E-Gram Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.276254888343!2d75.80972741504441!3d26.91243378313462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6f6e15a8a23%3A0x3b98e49e8bce6e2b!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1691674929230!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} E-Gram. All rights reserved.
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
        `}
      </style>
    </div>
  );
}
