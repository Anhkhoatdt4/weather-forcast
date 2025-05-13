import React from "react";

interface ActivityCardProps {
  image: string;
  title: string;
  distance: string;
}

const ActivityCard = ({ image, title, distance }: ActivityCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden w-[150px] h-[138px]">
      <img src={image} alt={title} className="w-full h-[100px] object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 px-2 py-1">
        <div className="text-xs font-semibold text-white">{title}</div>
        <div className="text-xs text-white opacity-80">{distance}</div>
      </div>
    </div>
  );
};

export default ActivityCard;
