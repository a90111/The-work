// api.js

/**
 * Emulated rest api
  */

/*
 * Data wrote by myself
 */
const countries = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'United Kingdom' },
  { id: 4, name: 'Australia' },
  { id: 5, name: 'China' },
];

const areas = [
  { id: 1, countryId: 1, name: 'New York' },
  { id: 2, countryId: 1, name: 'Los Angeles' },
  { id: 3, countryId: 2, name: 'Toronto' },
  { id: 4, countryId: 2, name: 'Vancouver' },
  { id: 5, countryId: 3, name: 'London' },
  { id: 6, countryId: 3, name: 'Manchester' },
  { id: 7, countryId: 4, name: 'Sydney' },
  { id: 8, countryId: 4, name: 'Melbourne' },
  { id: 9, countryId: 5, name: 'Beijing' },
  { id: 10, countryId: 5, name: 'Shanghai' },
];

const holidays = [
  { id: 1, countryId: 1, name: "New Year's Day", date: '2023-01-01' },
  { id: 2, countryId: 1, name: 'Independence Day', date: '2023-07-04' },
  { id: 3, countryId: 2, name: 'Canada Day', date: '2023-07-01' },
  { id: 4, countryId: 2, name: 'Thanksgiving Day', date: '2023-10-09' },
  { id: 5, countryId: 3, name: 'New Year\'s Day', date: '2023-01-01' },
  { id: 6, countryId: 3, name: 'Christmas Day', date: '2023-12-25' },
  { id: 7, countryId: 4, name: 'Australia Day', date: '2023-01-26' },
  { id: 8, countryId: 4, name: 'Anzac Day', date: '2023-04-25' },
  { id: 9, countryId: 5, name: 'Spring Festival', date: '2023-02-01'  },
  { id: 10, countryId: 5, name: 'Qingming Festival', date: '2023-04-04'  },

];
const weatherData = [
  { id: 1, areaId: 1, date: '2023-01-01', condition: 'Snowy', temperature: 30 },
  { id: 2, areaId: 1, date: '2023-07-04', condition: 'Sunny', temperature: 85 },
  { id: 3, areaId: 2, date: '2023-01-01', condition: 'Rainy', temperature: 52 },
  { id: 4, areaId: 2, date: '2023-07-04', condition: 'Sunny', temperature: 75 },
  { id: 5, areaId: 3, date: '2023-07-01', condition: 'Rainy', temperature: 65 },
  { id: 6, areaId: 3, date: '2023-10-09', condition: 'Cloudy', temperature: 51 },
  { id: 7, areaId: 4, date: '2023-07-01', condition: 'Cloudy', temperature: 68 },
  { id: 8, areaId: 4, date: '2023-10-09', condition: 'Rainy', temperature: 57 },
  { id: 9, areaId: 5, date: '2023-01-01', condition: 'Cloudy', temperature: 48 },
  { id: 10, areaId: 5, date: '2023-12-25', condition: 'Rainy', temperature: 46 },
  { id: 11, areaId: 6, date: '2023-01-01', condition: 'Cloudy', temperature: 39 },
  { id: 12, areaId: 6, date: '2023-12-25', condition: 'Snowy', temperature: 30 },
  { id: 13, areaId: 7, date: '2023-01-26', condition: 'Sunny', temperature: 80 },
  { id: 14, areaId: 7, date: '2023-04-25', condition: 'Sunny', temperature: 75 },
  { id: 15, areaId: 8, date: '2023-01-26', condition: 'Cloudy', temperature: 70 },
  { id: 16, areaId: 8, date: '2023-04-25', condition: 'Rainy', temperature: 65 },
  { id: 17, areaId: 9, date: '2023-02-01', condition: 'Sunny', temperature: 72 },
  { id: 18, areaId: 9, date: '2023-04-04', condition: 'Rainy', temperature: 61 },
  { id: 19, areaId: 10, date: '2023-02-01', condition: 'Rainy', temperature: 73 },
  { id: 20, areaId: 10, date: '2023-04-04', condition: 'Cloudy', temperature: 21 },

];

const accommodationData = [
  { id: 1, areaId: 1, name: 'NYC Hotel', priceByDate: { '2023-01-01': 150, '2023-07-04': 120 } },
  { id: 2, areaId: 1, name: 'NYC Apartment', priceByDate: { '2023-01-01': 120, '2023-07-04': 90 } },
  { id: 3, areaId: 2, name: 'LA Hotel', priceByDate: { '2023-01-01': 130, '2023-07-04': 110 } },
  { id: 4, areaId: 2, name: 'LA Apartment', priceByDate: { '2023-01-01': 100, '2023-07-04': 80 } },
  { id: 5, areaId: 3, name: 'Toronto Inn', priceByDate: { '2023-07-01': 130, '2023-10-09': 110 } },
  { id: 6, areaId: 3, name: 'Toronto B&B', priceByDate: { '2023-07-01': 100, '2023-10-09': 80 } },
  { id: 7, areaId: 4, name: 'Vancouver Hotel', priceByDate: { '2023-07-01': 140, '2023-10-09': 120 } },
  { id: 8, areaId: 4, name: 'Vancouver Apartment', priceByDate: { '2023-07-01': 110, '2023-10-09': 90 } },
  { id: 9, areaId: 5, name: 'London Hotel', priceByDate: { '2023-01-01': 160, '2023-12-25': 130 } },
  { id: 10, areaId: 5, name: 'London Apartment', priceByDate: { '2023-01-01': 130, '2023-12-25': 100 } },
  { id: 11, areaId: 6, name: 'Manchester Hotel', priceByDate: { '2023-01-01': 150, '2023-12-25': 120 } },
  { id: 12, areaId: 6, name: 'Manchester Apartment', priceByDate: { '2023-01-01': 120, '2023-12-25': 90 } },
  { id: 13, areaId: 7, name: 'Sydney Hotel', priceByDate: { '2023-01-26': 170, '2023-04-25': 140 } },
  { id: 14, areaId: 7, name: 'Sydney Apartment', priceByDate: { '2023-01-26': 140, '2023-04-25': 110 } },
  { id: 15, areaId: 8, name: 'Melbourne Hotel', priceByDate: { '2023-01-26': 160, '2023-04-25': 130 } },
  { id: 16, areaId: 8, name: 'Melbourne Apartment', priceByDate: { '2023-01-26': 190, '2023-04-25': 120 } },
  { id: 17, areaId: 9, name: 'QJD Hotel', priceByDate: { '2023-02-01': 135, '2023-04-04': 99 } },
  { id: 18, areaId: 10, name: 'PYF Hotel', priceByDate: { '2023-02-01': 220, '2023-04-04': 133 } },

];


/*
 * HTTP request (5 Get method)
 * 5 Asynchronous functions
 */
export async function getCountries() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(countries);
    }, 1000);
  });
}

export async function getAreas(countryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(areas.filter((area) => area.countryId === countryId));
    }, 1000);
  });
}

export async function getHolidays(countryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(holidays.filter((holiday) => holiday.countryId === countryId));
    }, 1000);
  });
}

export async function getWeather(areaId, date) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weatherData.find((weather) => weather.areaId === areaId && weather.date === date));
    }, 1000);
  });
}

export async function getAccommodations(areaId, date) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Use the 'date' parameter to find the price for a specific date
      resolve(
          accommodationData
              .filter((accommodation) => accommodation.areaId === areaId)
              .map((accommodation) => ({
                ...accommodation,
                price: accommodation.priceByDate[date],
              }))
      );
    }, 1000);
  });
}