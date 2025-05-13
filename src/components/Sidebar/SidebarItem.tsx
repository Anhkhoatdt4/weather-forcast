import React from 'react'

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
}
const SidebarItem = ({ icon, label, isActive } : SidebarItemProps) => {
   return (
    <div className="flex flex-col items-center">
      <div className={`p-2 rounded-full ${isActive ? 'bg-white text-gray-800' : 'text-gray-400 hover:text-white'}`}>
        {icon}
      </div>
      <span className="mt-1 text-xs text-gray-400">{label}</span>
    </div>
  );
}

export default SidebarItem
