import React from 'react'
import ActivityCard from './ActivityCard';
import { getActivitiesByWeather } from '~/data/activity_Data';
import { useWeather } from '~/context/WeatherContext';

const ActivitiesSection = () => {
  
  const convertWeatherToActivity = (weather: string) => {
    switch (weather) {
      case 'Clear':
        return 'sunny';
      case 'Clouds':
        return 'cloudy';
      case 'Rain':
        return 'rainy';
      case 'Snow':
        return 'snowy';
      case 'Drizzle':
        return 'drizzle';
      case 'Thunderstorm':
        return 'thunderstorm';
      default:
        return 'clear'; // Default to clear if no match
    }
  }
  
    const { weatherData, city } = useWeather();
    const weatherMain = weatherData?.weather?.[0]?.main || 'Clear';
    const activities = getActivitiesByWeather(convertWeatherToActivity(weatherMain), city);
    console.log('activities', activities);
    
  return (
    <div className="mb-8 border-[0.5px] border-gray-800 rounded-3xl p-4 bg-transparent shadow-md">
      <div className="flex items-center mb-4">
        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <h2 className="font-medium">Activities in your area</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {
            activities.map((activity : any,index : number) => {
                return (
                    <ActivityCard 
                        key={index}
                        image={activity.image} 
                        title={activity.title} 
                        distance={activity.distance} 
                    />
                )
            })
        }
      </div>
    </div>
  );
}

export default ActivitiesSection
