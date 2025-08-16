import React, { useState, useEffect } from "react";

const demoComplaints = [
  { id: 1, subject: "Birth Certificate not updated", service: "Birth Certificate", description: "Submitted 10 days ago, not updated", status: "Pending", date: "2025-08-05" },
  { id: 2, subject: "Income Certificate delay", service: "Income Certificate", description: "Status stuck on processing", status: "In Progress", date: "2025-08-10" },
  { id: 3, subject: "Property Tax miscalculation", service: "Property Tax Payment", description: "Amount shown is incorrect", status: "Resolved", date: "2025-08-12" },
];

const statusColors = {
  "Pending": "bg-yellow-100 text-yellow-800",
  "In Progress": "bg-blue-100 text-blue-800",
  "Resolved": "bg-green-100 text-green-800"
};

const ComplaintPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    service: "Birth Certificate",
  });

  useEffect(() => setComplaints(demoComplaints), []);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = {
      id: complaints.length + 1,
      ...formData,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };
    setComplaints([newComplaint, ...complaints]);
    setFormData({ subject: "", description: "", service: "Birth Certificate" });
    alert("Complaint submitted successfully!");
  };

  return (
    <div className="min-w-screen bg-gradient-to-b from-green-50 to-green-200 p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Citizen Complaint Portal</h1>
        <p className="text-red-700 mt-1 md:mt-2">Submit and track your complaints easily</p>
      </header>

      <div className="max-w-3xl mx-auto flex flex-col gap-8">

        {/* Complaint Form */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-700">Submit a Complaint</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter complaint subject"
                required
                className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              >
                <option>Birth Certificate</option>
                <option>Marriage Certificate</option>
                <option>Income Certificate</option>
                <option>Caste Certificate</option>
                <option>Property Tax Payment</option>
                <option>Water Bill Payment</option>
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter complaint details"
                required
                rows={4}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-600 text-black py-2.5 rounded-xl hover:bg-green-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 font-semibold"
              >
                Submit Complaint
              </button>
            </div>
          </form>
        </div>

        {/* Complaints Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {complaints.map(c => (
            <div key={c.id} className="bg-white p-4 md:p-5 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md md:text-lg font-bold text-green-700">{c.subject}</h3>
                <span className={`px-2 py-1 rounded-full text-xs md:text-sm font-semibold ${statusColors[c.status]}`}>{c.status}</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-1"><span className="font-semibold">Service:</span> {c.service}</p>
              <p className="text-gray-600 text-sm md:text-base mb-2"><span className="font-semibold">Date:</span> {c.date}</p>
              <p className="text-gray-700 text-sm md:text-base">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;
