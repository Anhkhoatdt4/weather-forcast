import React from 'react'

interface ActivityCardProps {
  image: string;
    title: string;
    distance: string;
}

const ActivityCard = ({ image, title, distance } : ActivityCardProps) => {
 return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-12 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-30 p-2 flex flex-col justify-end">
        <div className="text-xs font-medium">{title}</div>
        <div className="text-xs opacity-80">{distance}</div>
      </div>
    </div>
  );
}

export default ActivityCard
