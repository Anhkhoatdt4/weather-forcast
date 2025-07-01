import React, { useEffect, useState } from 'react' 
import background_mist from '~/assets/background_mist.jpg' 
import tree_mist from '~/assets/tree-mist-fog-cloudy.jpg'
import { useWeather } from '~/context/WeatherContext';
import { getBackgroundImageFromWeather } from '~/data/background_data';

const BackgroundWeather: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const {weatherData} = useWeather();
    const defaultBackground = 'https://t3.ftcdn.net/jpg/10/57/28/92/360_F_1057289248_Q2A7ZVQbMslo63GuFYEwPOQ82ELgajXD.jpg'
    const [background , setBackground] = useState<string | null>(null);
    useEffect(() => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0){
        const weatherMain = weatherData.weather[0].main;
        console.log('weatherMain:', weatherMain);
        const pageBackground = String(getBackgroundImageFromWeather(weatherMain)) || defaultBackground;
        setBackground(pageBackground);
    }
    }, [weatherData])
  return ( 
<div className="relative w-full min-h-screen overflow-auto">
  <img
    src= {background || defaultBackground}
    alt="Mist background"
    className="absolute inset-0 w-full h-full object-cover object-center select-none"
    loading="eager"
    decoding="async"
  />
  <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm" />
  <div className="relative z-10 w-full h-full">{children}</div>
</div>

  ); 
}; 
 
export default BackgroundWeather