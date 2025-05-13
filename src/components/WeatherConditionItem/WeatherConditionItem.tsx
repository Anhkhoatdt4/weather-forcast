import React from "react";
interface WeatherConditionItemProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    }
const WeatherConditionItem = ({ icon, label, value } : WeatherConditionItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <span className="text-xs ml-2">{label}</span>
      </div>
      <span className="text-xs font-medium">{value}</span>
    </div>
  );
};

export default WeatherConditionItem;
