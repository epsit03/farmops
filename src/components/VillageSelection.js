import React from "react";

const VillageSelection = ({ onSelectVillage }) => {
  const villages = ["Village 1", "Village 2", "Village 3"]; // Mock data

  return (
    <div>
      <h2>Select a Village</h2>
      <select onChange={(e) => onSelectVillage(e.target.value)}>
        <option>Select a village</option>
        {villages.map((village, index) => (
          <option key={index} value={village}>
            {village}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VillageSelection;
