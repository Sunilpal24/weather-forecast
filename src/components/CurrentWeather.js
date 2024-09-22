// components/CurrentWeather.js
import React from 'react';

const CurrentWeather = ({ weather, unit, handleUnitToggle }) => {
  const temp = unit === 'C' ? weather.main.temp : (weather.main.temp * 9/5) + 32;

  return (
    <div className="current-weather">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
      <p>{temp.toFixed(1)}° {unit}</p>
      <button onClick={handleUnitToggle}>Toggle °C/°F</button>
    </div>
  );
};

export default CurrentWeather;
