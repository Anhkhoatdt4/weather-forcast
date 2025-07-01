import { MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
// Simple header link component for navigation
const NavHeaderLink: React.FC<{ label: string; path: string }> = ({ label, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <button
      onClick={() => navigate(path)}
      className={`px-3 py-1 rounded font-semibold text-sm transition-colors duration-150 ${
        isActive ? 'bg-blue-700 text-white' : 'bg-black/30 text-white hover:bg-blue-800'
      }`}
      style={{ border: isActive ? '2px solid #fff' : 'none' }}
    >
      {label}
    </button>
  );
};
import { useWeather } from '~/context/WeatherContext';

interface NavBarProps {
  titleHeader ?: string;
}

const NavBar: React.FC<NavBarProps> = ({titleHeader}) => {
 const {city, setCity} = useWeather();

 const [inputCity, setInputCity] = useState(city);
 const [isEditing, setIsEditing] = useState(false);
  const handleSearch = () => {
    if (inputCity.trim()) {
      setCity(inputCity);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center px-5 py-2 bg-black/50 text-white relative z-20 pl-[90px] justify-between w-full">
  
  {/* Khối City + Search */}
  <div className="flex items-center">
    <MapPin className="mr-2 text-white" />
    {!isEditing ? (
      <span
        className="cursor-pointer font-semibold hover:font-bold"
        onClick={() => setIsEditing(true)}
      >
        {city}
      </span>
    ) : (
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="px-2 py-1 rounded border border-gray-300 text-black text-sm "
        autoFocus
      />
    )}
    <button
      onClick={handleSearch}
      className="ml-3 px-3 py-1 rounded text-white hover:bg-blue-700 text-sm"
      style={{ backgroundColor: '#020202' }}
    >
      Search
    </button>
  </div>

  {/* Khối Title + Navigation */}
  <div className="flex items-center gap-4">
    {titleHeader && (
      <h1 className="font-bold whitespace-nowrap mr-[350px]">{titleHeader}</h1>
    )}

     
    
    <NavLink
      to="/earth"
      className={({ isActive }) =>
        `px-3 py-1 rounded font-semibold text-sm transition-colors duration-150 ${
          isActive
            ? 'bg-blue-700 text-white border-2 border-white'
            : 'bg-black/30 text-white hover:bg-blue-800'
        }`
      }
    >
      Earth
    </NavLink>
    <NavLink
      to="/weather"
      className={({ isActive }) =>
        `px-3 py-1 rounded font-semibold text-sm transition-colors duration-150 ${
          isActive
            ? 'bg-blue-700 text-white border-2 border-white'
            : 'bg-black/30 text-white hover:bg-blue-800'
        }`
      }
    >
      Weather
    </NavLink>
    <NavLink
      to="/explore"
      className={({ isActive }) =>
        `px-3 py-1 rounded font-semibold text-sm transition-colors duration-150 ${
          isActive
            ? 'bg-blue-700 text-white border-2 border-white'
            : 'bg-black/30 text-white hover:bg-blue-800'
        }`
      }
    >
      Explore
    </NavLink>
    <NavLink
      to="/cities"
      className={({ isActive }) =>
        `px-3 py-1 rounded font-semibold text-sm transition-colors duration-150 ${
          isActive
            ? 'bg-blue-700 text-white border-2 border-white'
            : 'bg-black/30 text-white hover:bg-blue-800'
        }`
      }
    >
      Cities
    </NavLink>
    <NavLink
      to="/settings"
      className={({ isActive }) =>
        `px-3 py-1 rounded font-semibold text-sm transition-colors duration-150 ${
          isActive
            ? 'bg-blue-700 text-white border-2 border-white'
            : 'bg-black/30 text-white hover:bg-blue-800'
        }`
      }
    >
      Settings
    </NavLink>
  </div>
</div>

  );
};

export default NavBar;
