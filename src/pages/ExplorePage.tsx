import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import React from "react";
import {
  Cloud,
  Sun,
  Droplets,
  Wind,
  Mountain,
  Waves,
  MapPin,
  Camera,
  Calendar,
} from "lucide-react";

const ExplorePage: React.FC = () => {
  const { setTitleHeader } = useOutletContext<{
    setTitleHeader: (title: string) => void;
  }>();
  useEffect(() => {
    setTitleHeader("");
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-pulse">
          <Cloud
            className="text-white/30 w-24 h-24 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "6s" }}
          />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Cloud
            className="text-white/20 w-32 h-32 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "8s" }}
          />
        </div>
        <div className="absolute top-60 left-1/3 animate-pulse">
          <Cloud
            className="text-white/25 w-20 h-20 animate-bounce"
            style={{ animationDelay: "4s", animationDuration: "7s" }}
          />
        </div>

        <div className="absolute top-16 right-16">
          <Sun
            className="text-yellow-300 w-16 h-16 animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>

        <div className="absolute top-0 left-1/4">
          <Droplets
            className="text-blue-200/40 w-8 h-8 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute top-10 right-1/3">
          <Droplets
            className="text-blue-200/40 w-6 h-6 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="absolute top-40 right-10">
          <Wind
            className="text-white/30 w-12 h-12 animate-pulse"
            style={{ animationDelay: "2.5s" }}
          />
        </div>
      </div>
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/istockphoto-1198474553-640_adpp_is.mp4" // Thay bằng đường dẫn video của bạn
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-2xl animate-pulse">
            Explore Weather
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Khám phá các địa điểm, hoạt động ngoài trời, và các mẹo thời tiết
            thú vị trên toàn thế giới!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
            <div className="flex items-center mb-4">
              <Mountain className="text-green-300 w-8 h-8 mr-3" />
              <h3 className="text-white text-xl font-semibold">Núi & Đồi</h3>
            </div>
            <p className="text-blue-100">
              Khám phá thời tiết ở vùng núi cao và các hoạt động leo núi phù hợp
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
            <div className="flex items-center mb-4">
              <Waves className="text-cyan-300 w-8 h-8 mr-3" />
              <h3 className="text-white text-xl font-semibold">
                Biển & Đại Dương
              </h3>
            </div>
            <p className="text-blue-100">
              Theo dõi điều kiện thời tiết biển và các hoạt động dưới nước
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
            <div className="flex items-center mb-4">
              <Camera className="text-pink-300 w-8 h-8 mr-3" />
              <h3 className="text-white text-xl font-semibold">Nhiếp Ảnh</h3>
            </div>
            <p className="text-blue-100">
              Tìm thời điểm hoàn hảo để chụp ảnh thiên nhiên và phong cảnh
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="flex items-center mb-6">
            <Calendar className="text-yellow-300 w-10 h-10 mr-4" />
            <h2 className="text-3xl font-bold text-white">
              Gợi ý hoạt động ngoài trời
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <MapPin className="text-green-400 w-6 h-6 mr-3 group-hover:animate-bounce" />
              <span className="text-white font-medium">
                Đi bộ đường dài ở các công viên quốc gia
              </span>
            </div>

            <div className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Calendar className="text-orange-400 w-6 h-6 mr-3 group-hover:animate-bounce" />
              <span className="text-white font-medium">
                Tham gia các lễ hội thời tiết địa phương
              </span>
            </div>

            <div className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Waves className="text-blue-400 w-6 h-6 mr-3 group-hover:animate-bounce" />
              <span className="text-white font-medium">
                Khám phá các bãi biển nổi tiếng
              </span>
            </div>

            <div className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Sun className="text-yellow-400 w-6 h-6 mr-3 group-hover:animate-spin" />
              <span className="text-white font-medium">
                Picnic trong ngày nắng đẹp
              </span>
            </div>

            <div className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Wind className="text-gray-300 w-6 h-6 mr-3 group-hover:animate-pulse" />
              <span className="text-white font-medium">
                Bay diều trong ngày có gió
              </span>
            </div>

            <div className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Cloud className="text-purple-400 w-6 h-6 mr-3 group-hover:animate-bounce" />
              <span className="text-white font-medium">
                Quan sát mây và dự báo thời tiết
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Mẹo Thời Tiết Hữu Ích
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:transform hover:translateY-2 transition-all duration-300">
              <Droplets className="text-blue-300 w-12 h-12 mx-auto mb-4 animate-bounce" />
              <h3 className="text-white text-xl font-semibold mb-3">
                Dự Báo Mưa
              </h3>
              <p className="text-blue-100">
                Luôn kiểm tra radar thời tiết trước khi ra ngoài và mang theo áo
                mưa dự phòng
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:transform hover:translateY-2 transition-all duration-300">
              <Sun className="text-yellow-300 w-12 h-12 mx-auto mb-4 animate-pulse" />
              <h3 className="text-white text-xl font-semibold mb-3">
                Bảo Vệ Khỏi Nắng
              </h3>
              <p className="text-blue-100">
                Sử dụng kem chống nắng SPF 30+ và đội mũ khi chỉ số UV cao
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExplorePage;
