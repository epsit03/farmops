// src/pages/Wards.js
import React from 'react';

const Wards = () => {
  const wards = [
    { name: 'Ward 1', description: 'Key features of Ward 1...' },
    { name: 'Ward 2', description: 'Key features of Ward 2...' },
    { name: 'Ward 3', description: 'Key features of Ward 3...' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Wards</h1>
      <ul className="space-y-4">
        {wards.map((ward, idx) => (
          <li key={idx} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{ward.name}</h2>
            <p>{ward.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wards;
