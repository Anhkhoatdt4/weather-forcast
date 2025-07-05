import clearIcon from '~/assets/clear.png';
import cloudsIcon from '~/assets/cloud.png';
import rainIcon from '~/assets/rain.png';
import snowIcon from '~/assets/snow.png';
import drizzleIcon from '~/assets/drizzle.png';
import thunderstormIcon from '~/assets/thunderstorm.jpg';
import mistIcon from '~/assets/mist.jpg';


// Call backend API to get weather by city (backend will handle cache & OpenWeatherMap)

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api';

export const fetchWeatherByCity = async (city: string) => {
    const response = await fetch(`${baseURL}/weather/${city}`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    console.log("Weather data:", data);
    return data;
};

export const fetchForecastByCity = async (city: string) => {
    const response = await fetch(`${baseURL}/weather/${city}?forecast=true`);
    if (!response.ok) throw new Error('Failed to fetch forecast data');
    const data = await response.json();
    console.log("Forecast data:", data);
    return data;
};

export const allWeatherIcons: Record<string, string> = {
  "01d": clearIcon,
  "01n": clearIcon,
  "02d": cloudsIcon,
  "02n": cloudsIcon,
  "03d": cloudsIcon,
  "04d": drizzleIcon,
  "04n": drizzleIcon,
  "09d": rainIcon,
  "09n": rainIcon,
  "10d": rainIcon,
  "10n": rainIcon,
  "11d": thunderstormIcon,
  "11n": thunderstormIcon, 
  "13d": snowIcon,
  "13n": snowIcon,  
  "50d": mistIcon,
  "50n": mistIcon, 
};

export default allWeatherIcons;
