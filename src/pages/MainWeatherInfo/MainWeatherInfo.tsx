import React from 'react'
import { useWeather } from '~/context/WeatherContext';

const MainWeatherInfo = () => {
  const { weatherData } = useWeather();
    if (!weatherData) {
    return <div>Loading...</div>;
  }
  console.log("Main Weather Info Data: ", weatherData);

  // Lấy date từ weatherHistory[0].date (mảng [yyyy, mm, dd])
  const history = weatherData.weatherHistory[0] || {};
  let day = '';
  let monthDay = '';
  if (history.date && Array.isArray(history.date)) {
    const jsDate = new Date(history.date[0], history.date[1] - 1, history.date[2]);
    day = jsDate.toLocaleDateString('en-GB', { weekday: 'long' });
    monthDay = jsDate.toLocaleString('en-GB', { month: 'short', day: 'numeric' });
  }

  return (
    <div className="mb-9">
      <h1 className="text-3xl font-bold mb-1">{weatherData.weatherHistory[0].weatherDescription.toUpperCase()}</h1>
      <div className="flex items-end">
        <div className="text-6xl font-bold">{Math.round(weatherData.weatherHistory[0].temperature)}°C</div>
        <div className="ml-4 mb-2 text-sm opacity-80">
          <div>{day} | {monthDay}</div>
        </div>
      </div>
    </div>
  )
}

export default MainWeatherInfo
