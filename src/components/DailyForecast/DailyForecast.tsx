import React from "react";
import WeatherConditionItem from "../WeatherConditionItem/WeatherConditionItem";
import { Sun, CloudRain, Wind, Droplets, Umbrella } from "lucide-react";
import { useWeather } from "~/context/WeatherContext";

const getWeatherIcon = (main: string) => {
  switch (main) {
    case "Clear":
      return <Sun className="h-5 w-5 mx-auto" />;
    case "Clouds":
      return <CloudRain className="h-5 w-5 mx-auto" />;
    case "Rain":
      return <Umbrella className="h-5 w-5 mx-auto" />;
    default:
      return <Sun className="h-5 w-5 mx-auto" />;
  }
};

const DailyForecast = () => {
  const { weatherData, error } = useWeather();

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Hiển thị ngày hiện tại
  const today = {
    name: new Date().toLocaleDateString("en-US", {
      weekday: "short",
    }).toUpperCase(),
    icon: getWeatherIcon(weatherData.weather[0].main),
    temp: `${Math.round(weatherData.main.temp)}°`,
  };

  return (
    <div className="relative">
      <div className="absolute top-[-170px] transform -translate-x-1/2 text-4xl right-[-340px]">
        {getWeatherIcon(weatherData.weather[0].main)}
      </div>
      <div className="absolute top-[-120px] h-[450px] right-[-340px] bg-gray-800 bg-opacity-70 rounded-lg p-4 w-[320px] max-h-[500px]">
        <div className="grid grid-cols-5 gap-2">
          <div className="text-center text-white">
            <div className="text-xs mb-1">{today.name}</div>
            {today.icon}
            <div className="text-xs mt-1">{today.temp}</div>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-300">
          {new Date(weatherData.dt * 1000).toLocaleTimeString()} GMT
        </div>

        <div className="mt-6">
          <h3 className="text-xs font-bold mb-3">AIR CONDITIONS</h3>

          <div className="space-y-4">
            <WeatherConditionItem
              icon={<Droplets className="h-4 w-4" />}
              label="Real Feel"
              value={`${Math.round(weatherData.main.feels_like)}°`}
            />

            <WeatherConditionItem
              icon={<Wind className="h-4 w-4" />}
              label="Wind"
              value={`${weatherData.wind.speed} km/h`}
            />

            <WeatherConditionItem
              icon={<Umbrella className="h-4 w-4" />}
              label="Chance of rain"
              value={`${weatherData.clouds.all}%`}
            />

            <WeatherConditionItem
              icon={<Sun className="h-4 w-4" />}
              label="UV Index"
              value="4" // OpenWeatherMap không trả về UV Index mặc định
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
