// src/pages/Home.jsx
import React from "react";
import HomeImg from "../assets/Home.jpg";
import HomeImg1 from "../assets/Home1.jpg";
import HomeImg2 from "../assets/Home2.jpg";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#f5f5f5] to-[#e6ffe6] w-screen py-16 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[#006400] mb-6">
            Welcome to E-Gram Panchayat
          </h1>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Our mission is to bring government services closer to citizens
            through{" "}
            <span className="text-[#FF9933] font-semibold">
              digital transformation
            </span>.
            Easily apply for certificates, pay taxes, and stay updated on local governance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Empowering rural communities with technology for a transparent and
            efficient administration.
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4 animate-fadeIn delay-200">
          {[HomeImg, HomeImg1, HomeImg2].map((img, index) => (
            <div
              key={index}
              className={`relative group ${
                index === 2 ? "col-span-2 h-60" : "h-48"
              }`}
            >
              <img
                src={img}
                alt={`E-Gram Panchayat ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 rounded-lg shadow-[0_0_25px_3px_rgba(255,153,51,0.6)] opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
