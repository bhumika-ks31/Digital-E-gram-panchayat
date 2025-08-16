import React from "react";
import AboutImg from "../assets/About.jpg";
import AboutImg1 from "../assets/About1.jpg";
import AboutImg2 from "../assets/About2.jpg";
import AboutImg3 from "../assets/About3.jpg";

export default function About() {
  return (
    <div className="bg-gradient-to-br w-screen from-[#f5f5f5] to-[#e6ffe6] min-h-screen py-16 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#006400] mb-6 animate-fadeIn">
          About <span className="text-[#FF9933]">E-Gram Panchayat</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-12 leading-relaxed animate-fadeIn delay-200">
          E-Gram Panchayat is a step towards <span className="font-semibold text-[#FF9933]">Digital India</span>, 
          bringing governance closer to citizens. Our aim is to empower rural communities 
          through technology, ensuring transparency, accessibility, and efficiency in local administration.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn delay-400">
          {[AboutImg, AboutImg1, AboutImg2, AboutImg3].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={`About E-Gram Panchayat ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-[#FF9933]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-16 text-center animate-fadeIn delay-600">
          <h2 className="text-3xl font-bold text-[#006400] mb-4">Our Vision</h2>
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            To create a digitally empowered rural India where every citizen can easily access 
            government services without barriers. We believe in bridging the gap between 
            traditional governance and modern technology, ensuring every voice is heard, 
            and every service is delivered efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
