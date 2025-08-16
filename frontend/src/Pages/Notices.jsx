import React, { useState } from "react";

const notices = [
  {
    id: 1,
    title: "Office Closed on 15th August",
    date: "2025-08-15",
    summary: "All government offices will remain closed on Independence Day.",
    details: "All municipal and government offices will be closed on 15th August 2025. Online services will be available, but physical visits are not possible."
  },
  {
    id: 2,
    title: "New Property Tax Rules",
    date: "2025-08-10",
    summary: "Property tax rules have been updated. Please check the new rates.",
    details: "The government has revised property tax slabs for residential and commercial properties. Citizens are advised to check their property IDs and pay accordingly before the due date to avoid penalties."
  },
  {
    id: 3,
    title: "Vaccination Drive",
    date: "2025-08-05",
    summary: "Free vaccination camp at city hall from 20th August.",
    details: "The city health department is organizing a free vaccination camp at the city hall from 20th August to 25th August. All citizens above 18 years are encouraged to attend with valid ID proof."
  },
  {
    id: 4,
    title: "Water Supply Maintenance",
    date: "2025-08-12",
    summary: "Water supply will be disrupted in some areas for maintenance.",
    details: "Maintenance work in the city water supply system will cause temporary disruptions on 18th August from 9 AM to 5 PM. Residents are advised to store sufficient water beforehand."
  },
  {
    id: 5,
    title: "Traffic Diversion Notice",
    date: "2025-08-11",
    summary: "Road closure near central park due to construction.",
    details: "Due to ongoing road construction near Central Park, traffic will be diverted from 16th August. Please follow alternate routes and traffic signs."
  }
];

export default function NoticePage() {
  const [openNoticeId, setOpenNoticeId] = useState(null);

  const toggleNotice = (id) => {
    setOpenNoticeId(openNoticeId === id ? null : id);
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Notices</h1>
      
      <div className="max-w-5xl mx-auto space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{notice.title}</h2>
              <span className="text-sm text-gray-500">{notice.date}</span>
            </div>
            <p className="text-gray-600 mb-4">{notice.summary}</p>
            
            <button
              onClick={() => toggleNotice(notice.id)}
              className="text-blue-600 hover:underline text-sm font-medium mb-2"
            >
              {openNoticeId === notice.id ? "Hide Details" : "Read More"}
            </button>

            {openNoticeId === notice.id && (
              <div className="mt-2 text-gray-700 border-t pt-2">
                <p>{notice.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
