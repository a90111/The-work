import React from 'react';

function HolidaySelect({ selectedHoliday, onSelect, holidays }) {
  return (
    <select value={selectedHoliday} onChange={onSelect}>
      <option value="">Select a holiday</option>
      {holidays.map((holiday) => (
        <option key={holiday.id} value={holiday.id}>
          {holiday.name}
        </option>
      ))}
    </select>
  );
}

export default HolidaySelect;
