
import React from 'react';
import Background3D from './Background3D'; // Import 3D background component

const LandingPage = () => {
  // Same as before...
  const sections = [
    {
      title: 'Gram Panchayat (Village Council)',
      description: 'The governing body for local self-government in rural areas.',
    },
    {
      title: 'Panchayat Samiti (Block Level)',
      description: 'The intermediate level of governance overseeing multiple Gram Panchayats.',
    },
    {
      title: 'Wards',
      items: [
        { name: 'Ward 1', description: 'Key features of Ward 1...' },
        { name: 'Ward 2', description: 'Key features of Ward 2...' },
        { name: 'Ward 3', description: 'Key features of Ward 3...' },
      ],
    },
    {
      title: 'Village Divisions/Areas',
      items: [
        { name: 'Division 1', description: 'Key features of Division 1...' },
        { name: 'Division 2', description: 'Key features of Division 2...' },
        { name: 'Division 3', description: 'Key features of Division 3...' },
      ],
    },
    {
      title: 'Villages',
      items: [
        { name: 'Village A', description: 'Key features of Village A...' },
        { name: 'Village B', description: 'Key features of Village B...' },
        { name: 'Village C', description: 'Key features of Village C...' },
      ],
    },
  ];
  return (
    <div className="relative min-h-screen">
      <Background3D /> {/* 3D Background */}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-blue-500 to-green-500 p-6">
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Village Development Portal
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">{section.title}</h2>
            <p className="text-gray-700 mb-6">{section.description}</p>

            {section.items && (
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="bg-gray-100 p-4 rounded-md shadow-md hover:bg-blue-100 transition">
                    <h3 className="text-lg font-semibold text-green-600">{item.name}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default LandingPage;

