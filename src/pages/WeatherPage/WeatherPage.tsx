import React, { useState } from 'react'
import { fetchWeatherByCity } from '~/api/OpenWeatherMapApi';
import searchIcon from '~/assets/search.png';
import SearchBar from '~/components/SearchBar/SearchBar';
import WeatherCard from '~/components/WeatherCard/WeatherCard';
import MainWeatherInfo from '../MainWeatherInfo/MainWeatherInfo';
import DailyForecast from '~/components/DailyForecast/DailyForecast';
import ActivitiesSection from '~/components/Activity/ActivitiesSection';
import HourlyForecast from '~/components/HourlyForecast/HourlyForecast';
import BackgroundWeather from '../PageBackground/BackgroundWeather';
import Sidebar from '~/components/Sidebar/Sidebar';

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
    <div className='relative w-full h-screen bg-gradient-to-br from-gray-700 to-gray-9000 text-white overflow-hidden'>
      <div className='relative z-10 h-full max-w-4xl mx-auto px-4 py-4 flex flex-col'>
        <MainWeatherInfo/>
        <DailyForecast/>
        <ActivitiesSection/>
        <HourlyForecast/>
      </div>
      <BackgroundWeather/>
      <Sidebar/>
    </div>
  )

};

export default WeatherPage
