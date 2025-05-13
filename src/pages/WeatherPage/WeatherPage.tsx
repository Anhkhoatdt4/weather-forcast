import WeatherCard from "~/components/WeatherCard/WeatherCard";
import MainWeatherInfo from "../MainWeatherInfo/MainWeatherInfo";
import DailyForecast from "~/components/DailyForecast/DailyForecast";
import ActivitiesSection from "~/components/Activity/ActivitiesSection";
import HourlyForecast from "~/components/HourlyForecast/HourlyForecast";
import BackgroundWeather from "../PageBackground/BackgroundWeather";
import Sidebar from "~/components/Sidebar/Sidebar";
import NavBar from "~/components/Navigation/Navigation";

const WeatherPage = () => {

  return (
    <div className="relative w-full h-screen  text-white overflow-hidden">
      <div className="relative z-10 h-full w-[80%] mx-auto px-4 py-4 flex flex-col">
        <div className="flex">
          <MainWeatherInfo />
        </div>
        <div className="flex items-center justify-between ml-12">
           <Sidebar />
           <div className="flex flex-col items-center mr-[380px]">
            <div className="flex items-center justify-center">
              <ActivitiesSection />
              <DailyForecast />
            </div>
            <HourlyForecast />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default WeatherPage;
