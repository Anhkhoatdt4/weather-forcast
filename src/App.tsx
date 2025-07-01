import { useState } from "react";
import { Outlet } from "react-router-dom";
import "~/index.css";
import NavBar from "./components/Navigation/Navigation";
import BackgroundWeather from "./pages/PageBackground/BackgroundWeather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  const [titleHeader, setTitleHeader] = useState<string | undefined>(undefined);

  return (
    <>
      <WeatherProvider>
        <BackgroundWeather>
          <div className="relative z-10">
            <NavBar titleHeader={titleHeader}/>
            <Outlet context={{setTitleHeader}} />
          </div>
        </BackgroundWeather>
      </WeatherProvider>
    </>
  );
}

export default App;
