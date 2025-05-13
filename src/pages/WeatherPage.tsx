import React, { useState } from 'react'
import { fetchWeatherByCity } from '~/api/OpenWeatherMapApi';
import searchIcon from '~/assets/search.png';
import SearchBar from '~/components/SearchBar';
import WeatherCard from '~/components/WeatherCard';

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const handleSearch = async (city: string) => {
    try{
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
      setError(null);
    }
     catch (error) {
      setError('Failed to fetch weather data');
      console.error(error);
  }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  )

};

export default WeatherPage
