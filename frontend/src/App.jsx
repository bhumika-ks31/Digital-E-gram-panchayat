import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from '@Pages/Home'
import About from '@Pages/About'
import Services from '@Pages/Services'
import Contact from '@Pages/Contact'
import Notices from '@Pages/Notices'
import Login from '@Pages/Dashboard'
import Register from '@Pages/Register'
import ServiceDetail from '@Pages/ServiceDetail'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/login" element={<Login />} />   {/* 👈 fixed */}
            <Route path="/register" element={<Register />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
