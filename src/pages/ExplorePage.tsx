import React from 'react';

const ExplorePage: React.FC = () => {
  return (
    <div className="relative w-full min-h-0 pb-40 bg-gradient-to-br from-blue-100 to-blue-300 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-4">Explore Weather</h1>
      <p className="text-lg text-gray-700 mb-8">Khám phá các địa điểm, hoạt động ngoài trời, và các mẹo thời tiết thú vị trên toàn thế giới!</p>
      {/* Bạn có thể thêm các component bản đồ, danh sách hoạt động, hoặc các chủ đề khám phá tại đây */}
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-2">Gợi ý hoạt động ngoài trời</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Đi bộ đường dài ở các công viên quốc gia</li>
          <li>Tham gia các lễ hội thời tiết địa phương</li>
          <li>Khám phá các bãi biển nổi tiếng</li>
        </ul>
      </div>
    </div>
  );
};

export default ExplorePage;
