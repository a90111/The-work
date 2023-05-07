import React from 'react';

function AccommodationInfo({ accommodations }) {
  return (
    <div>
      <h2>Accommodation Rentals</h2>
      <ul>
        {accommodations.map((accommodation) => (
          <li key={accommodation.id}>
            {accommodation.name} - {accommodation.price} per night
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccommodationInfo;
