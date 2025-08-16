import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#006400] p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold text-white tracking-wide">
        E-Gram Panchayat
      </h1>

      {/* Links */}
      <div className="space-x-4">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
          { to: "/notices", label: "Notices" },
          { to: "/login", label: "Dashboard" },
          { to: "/register", label: "Complain" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="text-white hover:text-[#FF9933] transition duration-300 font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
