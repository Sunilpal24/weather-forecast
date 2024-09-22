// App.js
import React, { useEffect, useState } from 'react';
import { getWeatherByCity, getForecastByCity } from './Api';
import CurrentWeather from './components/CurrentWeather';
import SearchCity from './components/SearchCity';
import Forecast from './components/Forecast';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('New York'); // Default city
  const [unit, setUnit] = useState('C'); // Default unit is Celsius

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await getWeatherByCity(city);
        setWeather(weatherData);

        const forecastData = await getForecastByCity(city);
        setForecastData(forecastData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <SearchCity setCity={setCity} />
      {weather && (
        <CurrentWeather weather={weather} unit={unit} handleUnitToggle={handleUnitToggle} />
      )}
      {forecastData && <Forecast forecastData={forecastData} unit={unit} />}
    </div>
  );
};

export default App;
