import { useOutletContext } from "react-router-dom";
import React, { useEffect } from 'react';
import { Sun, CloudRain, Cloud, CloudSun, MapPin } from 'lucide-react';

const featuredCities = [
  { name: 'Hà Nội', temp: 32, weather: 'Clouds', icon: <Cloud className="h-8 w-8 text-blue-400 animate-bounce" />, image: '/HaNoi.jpg' },
  { name: 'TP. Hồ Chí Minh', temp: 34, weather: 'Clear', icon: <Sun className="h-8 w-8 text-yellow-400 animate-spin-slow" />, image: '/HoChiMinh.jpg' },
  { name: 'Đà Nẵng', temp: 30, weather: 'CloudSun', icon: <CloudSun className="h-8 w-8 text-orange-300 animate-pulse" />, image: '/Da Nang.jpg' },
  { name: 'New York', temp: 25, weather: 'Rain', icon: <CloudRain className="h-8 w-8 text-blue-600 animate-bounce" />, image: '/NewYork.jpg' },
  { name: 'London', temp: 20, weather: 'Clouds', icon: <Cloud className="h-8 w-8 text-gray-400 animate-bounce" />, image: '/London.jpg' },
];

const CitiesPage: React.FC = () => {
    const { setTitleHeader } = useOutletContext<{ setTitleHeader: (title: string) => void }>();
  useEffect(() => {
    setTitleHeader("");
  }, []);
   useEffect(() => {
    document.body.style.background = 'black'; // Set màu nền cho video nổi bật

    return () => {
      document.body.style.background = '';
    };
  }, []);
  return (
    <div className="relative w-full min-h-screen pb-40 bg-gradient-to-br from-blue-100 to-blue-300 overflow-auto">
      {/* Hiệu ứng mây động nền */}
       <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/856572-uhd_3840_2160_25fps.mp4" // Thay bằng đường dẫn video của bạn
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-40 pointer-events-none animate-clouds-move opacity-30 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" fillOpacity="0.7" d="M0,160L60,170C120,180,240,200,360,197.3C480,195,600,169,720,154.7C840,140,960,138,1080,154.7C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center px-4 pt-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-900 drop-shadow-lg animate-fade-in">🌏 Cities Weather</h1>
        <p className="text-lg text-gray-700 mb-8 animate-fade-in">Xem nhanh thời tiết của các thành phố lớn trên thế giới.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl z-10">
          {featuredCities.map((city, idx) => (
            <div
              key={city.name}
              className="bg-white/30 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl group animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-2 w-24 h-24 rounded-xl overflow-hidden shadow-lg">
                <img src={city.image} alt={city.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="mb-2 font-bold drop-shadow-lg">{city.icon}</div>
              <div className="flex items-center mb-1">
                <MapPin className="h-4 w-4 text-blue-500 mr-1" />
                <span className="font-semibold text-lg text-blue-800 group-hover:text-blue-600 transition">{city.name}</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{city.temp}°C</div>
              <div className="text-sm text-gray-800">{city.weather}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Hiệu ứng sóng ở dưới */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none animate-waves-move opacity-40 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3b82f6" fillOpacity="0.3" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      {/* CSS animation custom */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        .animate-fade-in { animation: fade-in 0.8s both; }
        @keyframes clouds-move { 0% { transform: translateX(-10%);} 100% { transform: translateX(10%);} }
        .animate-clouds-move { animation: clouds-move 12s linear infinite alternate; }
        @keyframes waves-move { 0% { transform: translateX(0);} 100% { transform: translateX(-5%);} }
        .animate-waves-move { animation: waves-move 10s linear infinite alternate; }
        @keyframes spin-slow { 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
      `}</style>
    </div>
  );
};

export default CitiesPage;
