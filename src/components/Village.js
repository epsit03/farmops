import React, { useState } from 'react';
import Plot from './Plot';  // Represents areas where development activities can be planned
import './Village.css';

const Village = () => {
  const [budget, setBudget] = useState(50000);  // Initial budget for village development
  const [developmentPlans, setDevelopmentPlans] = useState([]);

  // Function to handle development plan allocation
  const handleDevelopment = (plotId, type, cost) => {
    if (budget - cost >= 0) {
      setBudget(budget - cost);
      setDevelopmentPlans([...developmentPlans, { plotId, type, cost }]);
    } else {
      alert('Insufficient budget for this activity!');
    }
  };

  return (
    <div className="village-container">
      <header className="village-header">
        <h1>Village Development Planner</h1>
        <div className="budget-display">
          <span>Budget Remaining:</span> 
          <strong>₹{budget}</strong>
        </div>
      </header>

      <div className="village-map">
        {/* Display multiple plots where development can happen */}
        {[1, 2, 3].map(plotId => (
          <Plot key={plotId} id={plotId} onDevelop={handleDevelopment} />
        ))}
      </div>

      <section className="development-summary">
        <h2>Development Plans:</h2>
        <ul>
          {developmentPlans.length === 0 ? (
            <li>No development activities planned yet.</li>
          ) : (
            developmentPlans.map((plan, index) => (
              <li key={index}>
                <strong>{plan.type}</strong> in Plot {plan.plotId} - Cost: ₹{plan.cost}
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default Village;
