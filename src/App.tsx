import { useState } from "react";
import { Outlet } from "react-router-dom";
import "~/index.css";
import NavBar from "./components/Navigation/Navigation";
import BackgroundWeather from "./pages/PageBackground/BackgroundWeather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WeatherProvider>
        <BackgroundWeather>
          <div className="relative z-10">
            <NavBar/>
            <Outlet />
          </div>
        </BackgroundWeather>
      </WeatherProvider>
    </>
  );
}

export default App;
