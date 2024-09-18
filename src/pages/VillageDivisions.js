// src/pages/VillageDivisions.js
import React from 'react';

const VillageDivisions = () => {
  const divisions = [
    { name: 'Division 1', description: 'Key features of Division 1...' },
    { name: 'Division 2', description: 'Key features of Division 2...' },
    { name: 'Division 3', description: 'Key features of Division 3...' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Village Divisions/Areas</h1>
      <ul className="space-y-4">
        {divisions.map((division, idx) => (
          <li key={idx} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{division.name}</h2>
            <p>{division.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VillageDivisions;
