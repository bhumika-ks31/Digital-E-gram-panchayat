import React from "react";

export default function BirthCertificate() {
  return (
    <div className="w-screen min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Birth Certificate Application
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="date"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="text"
            placeholder="Place of Birth"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
