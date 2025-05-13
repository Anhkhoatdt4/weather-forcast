import React from 'react'

const BackgroundWeather = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      <img 
        src="/api/placeholder/1200/800" 
        alt="Stormy weather background" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default BackgroundWeather
