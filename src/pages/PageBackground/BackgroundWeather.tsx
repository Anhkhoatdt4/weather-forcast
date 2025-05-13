import React from 'react' 
import background_mist from '~/assets/background_mist.jpg' 
import tree_mist from '~/assets/tree-mist-fog-cloudy.jpg' 
const BackgroundWeather: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
  return ( 
<div className="relative w-full h-screen overflow-hidden">
  <img
    src="https://t3.ftcdn.net/jpg/10/57/28/92/360_F_1057289248_Q2A7ZVQbMslo63GuFYEwPOQ82ELgajXD.jpg"
    alt="Mist background"
    className="absolute inset-0 w-full h-full object-cover object-center select-none"
    loading="eager"
    decoding="async"
  />
  <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm" />
  <div className="relative z-10 w-full h-full">{children}</div>
</div>

  ); 
}; 
 
export default BackgroundWeather