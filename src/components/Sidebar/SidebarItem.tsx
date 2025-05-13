import React, { useState } from 'react'

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}
const SidebarItem = ({ icon, label, isActive, onClick } : SidebarItemProps) => {
   return (
    <div className="flex flex-col items-center">
      <div onClick={onClick} className={`p-2 rounded-full ${isActive ? 'bg-white text-gray-800' : 'text-gray-400 hover:text-white'}`}>
        {icon}
      </div>
      <span className="mt-1 text-xs text-gray-400">{label}</span>
    </div>
  );
}

export default SidebarItem
