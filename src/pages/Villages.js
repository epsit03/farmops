// src/pages/Villages.js
import React from 'react';

const Villages = () => {
  const villages = [
    { name: 'Village A', description: 'Key features of Village A...' },
    { name: 'Village B', description: 'Key features of Village B...' },
    { name: 'Village C', description: 'Key features of Village C...' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Villages</h1>
      <ul className="space-y-4">
        {villages.map((village, idx) => (
          <li key={idx} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{village.name}</h2>
            <p>{village.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Villages;
