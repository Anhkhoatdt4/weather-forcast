import React from "react";
import WeatherConditionItem from "../WeatherConditionItem/WeatherConditionItem";
import { Sun, CloudRain, Wind, Droplets, Umbrella, MapPin } from "lucide-react";

const DailyForecast = () => {
  const days = [
    {
      name: "FRI",
      icon: <CloudRain className="h-5 w-5 mx-auto" />,
      temp: "14°",
    },
    { name: "SAT", icon: <Sun className="h-5 w-5 mx-auto" />, temp: "17°" },
    {
      name: "SUN",
      icon: <CloudRain className="h-5 w-5 mx-auto" />,
      temp: "16°",
    },
    {
      name: "MON",
      icon: <CloudRain className="h-5 w-5 mx-auto" />,
      temp: "15°",
    },
    {
      name: "TUE",
      icon: <CloudRain className="h-5 w-5 mx-auto" />,
      temp: "14°",
    },
  ];

  return (
    <div className="relative bottom-[270px] left-[400px]">
            <div className="absolute top-[30px] transform -translate-x-1/2 text-4xl right-[300px]">
        <CloudRain className="h-12 w-12 mx-auto" />
      </div>
      <div className="absolute top-[150px] h-[450px] right-12 bg-gray-800 bg-opacity-70 rounded-lg p-4 w-[320px] max-h-[500px]">
        <div className="grid grid-cols-5 gap-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`text-center ${
                day.name === "SUN" ? "text-white" : "text-gray-400"
              }`}
            >
              <div className="text-xs mb-1">{day.name}</div>
              {day.icon}
              <div className="text-xs mt-1">{day.temp}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-xs text-gray-300">8:00PM GMT</div>

        <div className="mt-6">
          <h3 className="text-xs font-bold mb-3">AIR CONDITIONS</h3>

          <div className="space-y-4">
            <WeatherConditionItem
              icon={<Droplets className="h-4 w-4" />}
              label="Real Feel"
              value="30°"
            />

            <WeatherConditionItem
              icon={<Wind className="h-4 w-4" />}
              label="Wind"
              value="0.8 km/h"
            />

            <WeatherConditionItem
              icon={<Umbrella className="h-4 w-4" />}
              label="Chance of rain"
              value="2%"
            />

            <WeatherConditionItem
              icon={<Sun className="h-4 w-4" />}
              label="UV Index"
              value="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
