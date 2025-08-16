import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../assets/E-gram.jpg";

const formFieldsData = {
  "birth-certificate": ["Full Name", "Date of Birth", "Place of Birth", "Father's Name", "Mother's Name"],
  "marriage-certificate": ["Full Name", "Spouse Name", "Marriage Date", "Place of Marriage", "Father's Name", "Mother's Name"],
  "income-certificate": ["Full Name", "Father's Name", "Annual Income"],
  "caste-certificate": ["Full Name", "Father's Name", "Caste", "District"],
  "water-bill-payment": ["Consumer Number", "Billing Month", "Amount"],
  "property-tax-payment": ["Property ID", "Owner Name", "Amount"],
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [formData, setFormData] = useState({});
  const fields = formFieldsData[serviceId] || [];

  useEffect(() => {
    const initialData = {};
    fields.forEach((field) => (initialData[field] = ""));
    setFormData(initialData);
  }, [serviceId]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Remove base64 logo, backend will use static image
      const dataToSend = { ...formData, serviceName: serviceId.replace("-", " ").toUpperCase() };

      const res = await fetch(`http://localhost:5000/api/certificate/${serviceId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${serviceId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF. Make sure backend is running!");
    }
  };

  if (!fields.length) return <p className="text-center mt-10 text-red-500">Service not found!</p>;

  return (
    <div className="min-w-screen bg-gradient-to-b from-green-50 to-green-200 flex flex-col items-center">
      <header className="w-full flex justify-center py-6 bg-white shadow-md">
        <img src={logo} alt="E-gram Logo" className="h-16 w-auto object-contain" />
      </header>

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 mt-8 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-green-700 mb-8 text-center tracking-wide">
          {serviceId.replace("-", " ").toUpperCase()}
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">{field}</label>
              <input
                type={field.toLowerCase().includes("date") ? "date" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-300 hover:scale-105 hover:shadow-md"
              />
            </div>
          ))}

          <div className="md:col-span-2 flex flex-col gap-4 mt-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-black py-3 rounded-2xl hover:bg-green-700 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105 text-lg font-semibold"
            >
              Submit & Download PDF
            </button>

            <Link to="/services">
              <button className="w-full bg-gray-400 text-black py-3 rounded-2xl hover:bg-gray-500 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 text-lg font-semibold">
                Back to Services
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetail;
