// components/Forecast.js
import React from 'react';
import ForecastCard from './ForecastCard';

const Forecast = ({ forecastData, unit }) => {
  // Filter forecast data to get one entry per day (around midday)
  const filteredForecast = forecastData.list.filter((entry) =>
    entry.dt_txt.includes('12:00:00')
  );

  return (
    <div className="forecast">
      {filteredForecast.map((forecast, index) => (
        <ForecastCard key={index} forecast={forecast} unit={unit} />
      ))}
    </div>
  );
};

export default Forecast;
