// components/ForecastCard.js
import React from 'react';

const ForecastCard = ({ forecast, unit }) => {
  const tempMax = unit === 'C' ? forecast.main.temp_max : (forecast.main.temp_max * 9/5) + 32;
  const tempMin = unit === 'C' ? forecast.main.temp_min : (forecast.main.temp_min * 9/5) + 32;

  return (
    <div className="forecast-card">
      {/* Display the day of the week */}
      <p>{new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
      {/* Display the weather icon */}
      <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather icon" />
      {/* Display high and low temperatures */}
      <p>High: {tempMax.toFixed(1)}° {unit}</p>
      <p>Low: {tempMin.toFixed(1)}° {unit}</p>
    </div>
  );
};

export default ForecastCard;
