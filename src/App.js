// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import CountrySelect from './CountrySelect';
import AreaSelect from './AreaSelect';
import HolidaySelect from './HolidaySelect';
import WeatherInfo from './WeatherInfo';
import AccommodationInfo from './AccommodationInfo';
import { getCountries, getAreas, getHolidays, getWeather, getAccommodations } from './api';

function App() {
  const [countries, setCountries] = useState([]);
  const [areas, setAreas] = useState([]);
  const [holidays, setHolidays] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const [weather, setWeather] = useState(null);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const countries = await getCountries();
      setCountries(countries);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (selectedCountry) {
        const areas = await getAreas(selectedCountry);
        setAreas(areas);

        const holidays = await getHolidays(selectedCountry);
        setHolidays(holidays);
      } else {
        setAreas([]);
        setHolidays([]);
      }
    }

    fetchData();
  }, [selectedCountry]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedArea && selectedHoliday) {
      const holiday = holidays.find((holiday) => holiday.id === selectedHoliday);
      const weather = await getWeather(selectedArea, holiday.date);
      setWeather(weather);

      const accommodations = await getAccommodations(selectedArea, holiday.date);
      setAccommodations(accommodations);
    } else {
      setWeather(null);
      setAccommodations([]);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <CountrySelect
          selectedCountry={selectedCountry}
          onSelect={(e) => setSelectedCountry(parseInt(e.target.value))}
          countries={countries}
        />
        <AreaSelect
          selectedArea={selectedArea}
          onSelect={(e) => setSelectedArea(parseInt(e.target.value))}
          areas={areas}
        />
        <HolidaySelect
          selectedHoliday={selectedHoliday}
          onSelect={(e) => setSelectedHoliday(parseInt(e.target.value))}
          holidays={holidays}
        />
        <button type="submit">Submit</button>
      </form>
      {weather && <WeatherInfo weather={weather} />}
      {accommodations.length > 0 && <AccommodationInfo accommodations={accommodations} />}
    </div>
  );
}

export default App;