import React, { useState } from 'react';

export default function Complaint() {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert('Complaint submitted successfully!');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">File a Complaint</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <textarea name="complaint" placeholder="Write your complaint here" onChange={e => setComplaint(e.target.value)}
          className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
