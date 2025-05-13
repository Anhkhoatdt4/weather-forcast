import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchWeatherByCity } from '~/api/OpenWeatherMapApi';

interface WeatherContextProps {
    weatherData : any;
    city: string,
    setCity: (city : string) => void;
    error : string | null;
}

const WeatherContext = createContext<WeatherContextProps | undefined > (undefined);

export const WeatherProvider : React.FC<{ children: React.ReactNode}> = ({children}) => {
    const [city, setCity] = useState('London');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState<string | null> (null);
 
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await fetchWeatherByCity(city);
                setWeatherData(data);
                setError(null);
            } catch (error) {
                setError("Failed to fetch weather data. Please try again")
            }
        };

        fetchWeather();
    }, [city])
    return (
        <WeatherContext.Provider value={{weatherData, city, setCity , error}}>
            {children}
        </WeatherContext.Provider>
  )
}

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};