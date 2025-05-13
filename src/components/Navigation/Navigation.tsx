import { MapPin } from 'lucide-react';
import React, { useState } from 'react';

interface NavBarProps {
  onSearch: (city: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('New York');
  const [isEditing, setIsEditing] = useState(false);

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center px-5 py-2 bg-black/50 text-white relative z-20">
      <MapPin className="mr-2 text-white" />

      {!isEditing ? (
        <span
          className="cursor-pointer font-semibold"
          onClick={() => setIsEditing(true)}
        >
          {city}
        </span>
      ) : (
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="px-2 py-1 rounded border border-gray-300 text-black text-sm"
          autoFocus
        />
      )}

      <button
        onClick={handleSearch}
        className="ml-3 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
      >
        Search
      </button>
    </div>
  );
};

export default NavBar;
