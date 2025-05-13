import React from 'react';

interface WeatherCardProps {
  data: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <h1>{Math.round(main.temp)}°C</h1>
      <p>Feels like: {Math.round(main.feels_like)}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;