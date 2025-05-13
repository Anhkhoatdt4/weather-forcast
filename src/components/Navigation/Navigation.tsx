import { MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { useWeather } from '~/context/WeatherContext';

interface NavBarProps {
}

const NavBar: React.FC<NavBarProps> = () => {
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
    <div className="flex items-center px-5 py-2 bg-black/50 text-white relative z-20 pl-[90px]">
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
          onChange={(e) => {
            setInputCity(e.target.value);
           console.log('Nhập liệu:', e.target.value); 
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="px-2 py-1 rounded border border-gray-300 text-black text-sm "
          autoFocus
        />
      )}

      <button
        onClick={handleSearch}
        className="ml-3 px-3 py-1 rounded text-white hover:bg-blue-700 text-sm"
        style={{backgroundColor : '#020202'}}
      >
        Search
      </button>
    </div>
  );
};

export default NavBar;
