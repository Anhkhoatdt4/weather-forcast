import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const videoSources = [
    "istockphoto-1198474553-640_adpp_is.mp4",
    "istockphoto-864526000-640_adpp_is.mp4",
  ]

  const { setTitleHeader } = useOutletContext<{ setTitleHeader: (title: string) => void }>();
  useEffect(() => {
    setTitleHeader("");
  }, []);

  const currentHour = new Date().getHours();
  const selectedVideo = videoSources[currentHour % videoSources.length];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Video nền */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-77 z-0"
      >
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay mờ để tăng độ nổi cho chữ */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-10" />
      {/* Nội dung chữ */}
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Welcome to Weather App</h1>
        <p className="mb-8 text-lg text-white text-center max-w-xl drop-shadow">
          Xem dự báo thời tiết nhanh chóng, trực quan và chính xác cho mọi thành phố trên thế giới. Hãy thử tìm kiếm thành phố bạn quan tâm để xem thông tin chi tiết!
        </p>
        <button
          onClick={() => navigate('/weather')}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Xem thời tiết ngay
        </button>
      </div>
    </div>
  );
};

export default HomePage;
