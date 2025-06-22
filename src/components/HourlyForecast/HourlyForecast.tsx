import React from 'react';
import { useWeather } from '~/context/WeatherContext';

const getWeatherIcon = (main: string) => {
  switch (main) {
    case 'Clear':
      return (
        <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} />
        </svg>
      );
    case 'Clouds':
      return (
        <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    case 'Rain':
      return (
        <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      );
    default:
      return (
        <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} />
        </svg>
      );
  }
};

const HourlyForecast = () => {
  const { forecastData, error } = useWeather();

  if (error) return <p className="text-red-500">{error}</p>;
  if (!forecastData) return <p>Loading...</p>;

  // Lấy 7 mốc giờ đầu tiên trong forecast
  const hourlyData = forecastData.list.slice(0, 7).map((item: any) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    temp: `${Math.round(item.main.temp)}°`,
    icon: getWeatherIcon(item.weather[0].main),
  }));

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 w-full">
      <div className="flex items-center mb-4">
        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-sm font-medium">24-hour forecast</h3>
      </div>
      <div className="relative mt-6">
        <svg className="w-full h-12" viewBox="0 0 350 40">
          <path 
            d="M0,20 C20,5 40,25 60,10 C80,20 100,20 120,25 C140,30 160,5 180,20 C200,25 220,15 240,5 C260,15 280,25 300,20 C320,15 340,20 350,10" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
          />
        </svg>
        <div className="grid grid-cols-7 gap-4 mt-4">
          {hourlyData.map((hour : any, index : number) => (
            <div key={index} className="text-center">
              <div className="text-xs">{hour.temp}</div>
              <div className="my-2">{hour.icon}</div>
              <div className="text-xs text-gray-400">{hour.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
