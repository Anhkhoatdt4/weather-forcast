import React from 'react'
import allWeatherIcons from '~/api/OpenWeatherMapApi';
import clear_icon from '~/assets/clear.png';
interface Props {
  data: any;
}

const WeatherCard = ({data} : Props) => {
  const icon = allWeatherIcons[data.weather[0].icon] || clear_icon;
  return (
    <div>
      <p>Temperature: {Math.floor(data.main.temp)}°C</p>
      <p>Wind speed: {data.wind.speed}</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Location: {data.name}</p>
      <p>Icon: {data.weather[0].icon}</p>
      <img src={icon} alt="Weather Icon" />
    </div>
  )
}

export default WeatherCard;
