import React from 'react';

function CountrySelect({ selectedCountry, onSelect, countries }) {
  return (
    <select value={selectedCountry} onChange={onSelect}>
      <option value="">Select a country</option>
      {countries.map((country) => (
        <option key={country.id} value={country.id}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default CountrySelect;
