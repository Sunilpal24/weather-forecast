// api.js
import axios from 'axios';

// Use your API key here
const API_KEY = '297d3ef4be2b683fca25de91d158c085';  // Replace with the key you provided
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Function to get current weather by city name
export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',  // For Celsius, use 'metric'; for Fahrenheit, use 'imperial'
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.response?.data?.message || error.message);
    throw error;
  }
};

// Function to get the 5-day weather forecast by city name
export const getForecastByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',  // For Celsius, use 'metric'; for Fahrenheit, use 'imperial'
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error.response?.data?.message || error.message);
    throw error;
  }
};
