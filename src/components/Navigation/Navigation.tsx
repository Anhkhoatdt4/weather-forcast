import React, { useState } from 'react';

interface NavBarProps {
  onSearch: (city: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', background: '#333', color: '#fff' }}>
      <h1 style={{ margin: '0 20px', fontSize: '24px' }}>Weather App</h1>
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button
        onClick={handleSearch}
        style={{ marginLeft: '10px', padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Search
      </button>
    </div>
  );
};

export default NavBar;