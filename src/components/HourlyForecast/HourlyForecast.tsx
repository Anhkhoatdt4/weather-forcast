import React from 'react'

const HourlyForecast = () => {
  const hourlyData = [
    { time: '10AM', temp: '26°', icon: 'cloud' },
    { time: '12PM', temp: '28°', icon: 'cloud-sun' },
    { time: '2PM', temp: '22°', icon: 'cloud-rain' },
    { time: '4PM', temp: '18°', icon: 'cloud' },
    { time: '6PM', temp: '20°', icon: 'cloud' },
    { time: '8PM', temp: '26°', icon: 'cloud-rain' },
    { time: '10PM', temp: '16°', icon: 'cloud-rain' }
  ];

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4">
      <div className="flex items-center mb-4">
        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-sm font-medium">24-hour forecast</h3>
      </div>
      
      <div className="relative mt-6">
        {/* Temperature Line Graph */}
        <svg className="w-full h-12" viewBox="0 0 350 40">
          <path 
            d="M0,20 C20,5 40,25 60,10 C80,20 100,20 120,25 C140,30 160,5 180,20 C200,25 220,15 240,5 C260,15 280,25 300,20 C320,15 340,20 350,10" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
          />
        </svg>
        
        {/* Hourly Data Points */}
        <div className="grid grid-cols-7 gap-4 mt-4">
          {hourlyData.map((hour, index) => (
            <div key={index} className="text-center">
              <div className="text-xs">{hour.temp}</div>
              
              <div className="my-2">
                {hour.icon === 'cloud' && (
                  <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )}
                {hour.icon === 'cloud-sun' && (
                  <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {hour.icon === 'cloud-rain' && (
                  <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </div>
              
              <div className="text-xs text-gray-400">{hour.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast
