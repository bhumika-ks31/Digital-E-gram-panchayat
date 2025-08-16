// src/pages/NoticeDetail.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NoticeDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const notice = location.state;

  if (!notice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Notice not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{notice.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          Date: {new Date(notice.date).toLocaleDateString("en-GB")}
        </p>
        <p className="text-gray-700 leading-relaxed">{notice.desc}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-700 transition"
        >
          Back to Notices
        </button>
      </div>
    </div>
  );
}
