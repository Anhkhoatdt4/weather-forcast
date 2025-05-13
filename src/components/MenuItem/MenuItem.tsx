import { ReactNode } from 'react';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, label, isActive }: SidebarItemProps) => (
  <div className={`flex items-center space-x-2 ${isActive ? 'bg-gray-600' : ''}`}>
    <div>{icon}</div>
    <span>{label}</span>
  </div>
);

export default SidebarItem;
