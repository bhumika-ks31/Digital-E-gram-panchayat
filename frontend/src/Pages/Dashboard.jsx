import React, { useState, useEffect } from "react";
import {
  PieChart, Pie, Tooltip, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";
import logo from "../assets/E-gram.jpg";

// Demo applications data
const demoApplications = [
  { id: 1, service: "Birth Certificate", status: "Approved", date: "2025-08-15", remarks: "Verified by admin" },
  { id: 2, service: "Income Certificate", status: "Pending", date: "2025-08-10", remarks: "Waiting for documents" },
  { id: 3, service: "Property Tax Payment", status: "Rejected", date: "2025-08-05", remarks: "Incorrect details" },
  { id: 4, service: "Caste Certificate", status: "Approved", date: "2025-08-01", remarks: "Verified successfully" },
  { id: 5, service: "Marriage Certificate", status: "Pending", date: "2025-07-30", remarks: "Documents pending" },
];

// Colors for charts
const COLORS = ["#82ca9d", "#ffc658", "#ff6b6b"];

const CitizenDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Replace with real API later
    setApplications(demoApplications);
  }, []);

  // Metrics calculation
  const total = applications.length;
  const approved = applications.filter(a => a.status === "Approved").length;
  const pending = applications.filter(a => a.status === "Pending").length;
  const rejected = applications.filter(a => a.status === "Rejected").length;

  const statusData = [
    { name: "Approved", value: approved },
    { name: "Pending", value: pending },
    { name: "Rejected", value: rejected },
  ];

  // Applications per service
  const serviceCounts = {};
  applications.forEach(a => {
    serviceCounts[a.service] = (serviceCounts[a.service] || 0) + 1;
  });
  const serviceData = Object.keys(serviceCounts).map(key => ({
    service: key,
    count: serviceCounts[key],
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 w-screen p-4">
      {/* Header */}
      <header className="w-screen flex justify-center py-6 bg-white shadow-md mb-6">
        <img src={logo} alt="E-gram Logo" className="h-16 w-auto object-contain" />
      </header>

      <div className="w-screen max-w-full flex flex-col gap-6">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
            <h3 className="text-gray-500 font-semibold">Total Applications</h3>
            <p className="text-3xl font-bold text-green-700">{total}</p>
          </div>
          <div className="bg-green-100 p-6 rounded-3xl shadow-lg text-center">
            <h3 className="text-gray-700 font-semibold">Approved</h3>
            <p className="text-3xl font-bold text-green-800">{approved}</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-3xl shadow-lg text-center">
            <h3 className="text-gray-700 font-semibold">Pending</h3>
            <p className="text-3xl font-bold text-yellow-800">{pending}</p>
          </div>
          <div className="bg-red-100 p-6 rounded-3xl shadow-lg text-center">
            <h3 className="text-gray-700 font-semibold">Rejected</h3>
            <p className="text-3xl font-bold text-red-800">{rejected}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status Pie Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-lg" style={{ height: 300 }}>
            <h2 className="text-xl font-bold mb-2">Application Status</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Service-wise Bar Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-lg" style={{ height: 300 }}>
            <h2 className="text-xl font-bold mb-2">Applications per Service</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serviceData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="service" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Applications Table (Detail Only) */}
        <div className="bg-white p-6 rounded-3xl shadow-lg overflow-x-auto w-screen">
          <h2 className="text-xl font-bold mb-4">Recent Applications</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id} className="border-b">
                  <td className="px-4 py-2">{app.service}</td>
                  <td className={`px-4 py-2 font-semibold ${
                    app.status === "Approved" ? "text-green-700" :
                    app.status === "Pending" ? "text-yellow-700" :
                    "text-red-700"
                  }`}>
                    {app.status}
                  </td>
                  <td className="px-4 py-2">{app.date}</td>
                  <td className="px-4 py-2 text-gray-700">{app.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
