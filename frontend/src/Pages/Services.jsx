import React from "react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, slug: "birth-certificate", title: "Birth Certificate", description: "Apply for a new birth certificate" },
  { id: 2, slug: "marriage-certificate", title: "Marriage Certificate", description: "Apply for marriage certificate" },
  { id: 3, slug: "income-certificate", title: "Income Certificate", description: "Apply for income certificate" },
  { id: 4, slug: "caste-certificate", title: "Caste Certificate", description: "Apply for caste certificate" },
  { id: 5, slug: "water-bill-payment", title: "Water Bill Payment", description: "Pay your water supply bills" },
  { id: 6, slug: "property-tax-payment", title: "Property Tax Payment", description: "Pay your property taxes online" },
];

const Services = () => {
  return (
    <div className="min-w-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">e-Gram Panchayat Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
            <Link to={`/service/${service.slug}`}>
              <button className="mt-4 w-full bg-green-600 text-black py-2 rounded-lg hover:bg-green-700 transition transform hover:-translate-y-1">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
