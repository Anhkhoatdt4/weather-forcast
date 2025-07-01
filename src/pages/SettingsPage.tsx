import React, { useState } from 'react';
import { Settings, Thermometer, Globe, Bell, Sun, Moon, MapPin, Clock, Palette } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [tempUnit, setTempUnit] = useState('celsius');
  const [language, setLanguage] = useState('vi');
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');
  const [autoLocation, setAutoLocation] = useState(true);
  const [timeFormat, setTimeFormat] = useState('24h');

  return (
    <div className="min-h-0 pb-40 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Cài đặt</h1>
          <p className="text-lg text-gray-600">Tùy chỉnh trải nghiệm thời tiết của bạn</p>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Temperature Unit */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <Thermometer className="w-6 h-6 text-red-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Đơn vị nhiệt độ</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tempUnit"
                  value="celsius"
                  checked={tempUnit === 'celsius'}
                  onChange={(e) => setTempUnit(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-3 text-gray-700">Độ C (°C)</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tempUnit"
                  value="fahrenheit"
                  checked={tempUnit === 'fahrenheit'}
                  onChange={(e) => setTempUnit(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-3 text-gray-700">Độ F (°F)</span>
              </label>
            </div>
          </div>

          {/* Language */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Ngôn ngữ</h3>
            </div>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Bell className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Thông báo thời tiết</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-sm text-gray-600">Nhận thông báo về thời tiết khắc nghiệt và cập nhật hàng ngày</p>
          </div>

          {/* Theme */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <Palette className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Giao diện</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={theme === 'light'}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <Sun className="w-4 h-4 ml-3 mr-2 text-yellow-500" />
                <span className="text-gray-700">Sáng</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === 'dark'}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <Moon className="w-4 h-4 ml-3 mr-2 text-blue-500" />
                <span className="text-gray-700">Tối</span>
              </label>
            </div>
          </div>

          {/* Auto Location */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Vị trí tự động</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoLocation}
                  onChange={(e) => setAutoLocation(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-sm text-gray-600">Tự động phát hiện vị trí của bạn để hiển thị thời tiết chính xác</p>
          </div>

          {/* Time Format */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-indigo-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Định dạng thời gian</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="timeFormat"
                  value="24h"
                  checked={timeFormat === '24h'}
                  onChange={(e) => setTimeFormat(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-3 text-gray-700">24 giờ (14:30)</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="timeFormat"
                  value="12h"
                  checked={timeFormat === '12h'}
                  onChange={(e) => setTimeFormat(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-3 text-gray-700">12 giờ (2:30 PM)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform transition duration-200 hover:scale-105">
            Lưu cài đặt
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-2">Lưu ý</h4>
          <p className="text-blue-700 text-sm">
            Các cài đặt sẽ được lưu trữ cục bộ và áp dụng cho tất cả các phiên sử dụng tiếp theo. 
            Một số thay đổi có thể yêu cầu tải lại trang để có hiệu lực.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;