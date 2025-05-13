import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "~/index.css";
import NavBar from './components/Navigation/Navigation';
import BackgroundWeather from './pages/PageBackground/BackgroundWeather';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackgroundWeather>
        <div className="relative z-10">
          <NavBar onSearch={() => {}} />
          <Outlet />
        </div>
      </BackgroundWeather>
    </>
  )
}

export default App
