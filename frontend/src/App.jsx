import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Notices from "./pages/Notices";
import Dashboard from "./Pages/Dashboard";
import Register from "./pages/Register";
import ServiceDetail from "./pages/ServiceDetail";

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          

            {/* Hardcoded service details route */}
            <Route path="/service/:serviceId" element={<ServiceDetail />} />

            {/* Redirect any unknown route to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
