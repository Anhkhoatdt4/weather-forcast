import React from "react";
import SidebarItem from "./SidebarItem";
import { Sun, CloudRain, Wind, Droplets, Umbrella, MapPin } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <CloudRain className="h-5 w-5" />, label: "Weather" },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Explore",
    },
    { icon: <MapPin className="h-5 w-5" />, label: "Cities" },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Settings",
    },
  ];

  return (
    <div className="absolute left-0 top-0 bottom-0 bg-gray-800 bg-opacity-70 w-16 flex flex-col items-center py-6">
      <div className="rounded-full bg-gray-700 p-1 mb-8">
        <img
          src="/api/placeholder/32/32"
          alt="User profile"
          className="h-8 w-8 rounded-full"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-8">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
