import React from 'react'
import ActivityCard from './ActivityCard';

const ActivitiesSection = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <h2 className="font-medium">Activities in your area</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <ActivityCard 
          image="/api/placeholder/200/120" 
          title="Parks" 
          distance="2km away" 
        />
        
        <ActivityCard 
          image="/api/placeholder/200/120" 
          title="Lakes" 
          distance="3km away" 
        />
        
        <ActivityCard 
          image="/api/placeholder/200/120" 
          title="Beach" 
          distance="15km away" 
        />
        
        <ActivityCard 
          image="/api/placeholder/200/120" 
          title="Resort" 
          distance="20km away" 
        />
      </div>
    </div>
  );
}

export default ActivitiesSection
