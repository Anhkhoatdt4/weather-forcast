import React, { useState } from 'react'; 
import SidebarItem from './SidebarItem'; // Đảm bảo rằng đường dẫn chính xác
import avatar from '~/assets/avatar.jpg'; 
import WeatherIcon from '../common/WeatherIcon';
import ExploreIcon from '../common/ExploreIcon';
import CitiesIcon from '../common/CitiesIcon';
import SettingsIcon from '../common/SettingIcon';

const Sidebar = () => {
      const [activeItem, setActiveItem] = useState<number | null>(null);
  const menuItems = [
    { icon: <WeatherIcon />, label: 'Weather' },
    { icon: <ExploreIcon />, label: 'Explore' },
    { icon: <CitiesIcon />, label: 'Cities' },
    { icon: <SettingsIcon />, label: 'Settings' },
  ];
  const handleItemClick = (index : number) => {
    if (activeItem === index) { return ;}
    else {
        setActiveItem(index);
    }
  }
  return (
    <div className="h-full w-16 bg-gray-800 bg-opacity-70 flex flex-col items-center py-6 rounded-3xl">
      <div className="rounded-full bg-gray-700 p-1 mb-8">
        <img src={avatar} alt="User profile" className="h-8 w-8 rounded-full" />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-8">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
