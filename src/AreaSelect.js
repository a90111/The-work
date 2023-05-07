import React from 'react';

function AreaSelect({ selectedArea, onSelect, areas }) {
  return (
    <select value={selectedArea} onChange={onSelect}>
      <option value="">Select an area</option>
      {areas.map((area) => (
        <option key={area.id} value={area.id}>
          {area.name}
        </option>
      ))}
    </select>
  );
}

export default AreaSelect;
