import React from 'react'
import { useWeather } from '~/context/WeatherContext';

const MainWeatherInfo = () => {
  const { weatherData } = useWeather();

    if (!weatherData) {
    return <div>Loading...</div>;
  }
  // Chuyển đổi thời gian Unix (timestamp) thành định dạng ngày tháng
  const date = new Date(weatherData.dt * 1000);
  const day = date.toLocaleDateString('en-GB', {weekday: "long"});  // Chuyển từ giây sang mili giây
  const monthDay = date.toLocaleString('en-GB', { month: 'short', day: 'numeric' });

  return (
    <div className="mb-9">
      <h1 className="text-3xl font-bold mb-1">{weatherData.weather[0].description.toUpperCase()}</h1>
      <div className="flex items-end">
        <div className="text-6xl font-bold">{Math.round(weatherData.main.temp)}°C</div>
        <div className="ml-4 mb-2 text-sm opacity-80">
          <div>{day} | {monthDay}</div>
        </div>
      </div>
    </div>
  )
}

export default MainWeatherInfo
