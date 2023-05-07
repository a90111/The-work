import React from 'react';

function WeatherInfo({ weather }) {
  return (
    <div>
      <h2>Weather Information</h2>
      <p>Condition: {weather.condition}</p>
      <p>Temperature: {weather.temperature}</p>
    </div>
  );
}

export default WeatherInfo;
