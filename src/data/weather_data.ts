// Define types of the weather data returned from OpenWeatherMap API
interface Weather {
    // Coordinates of the location
    // lon: Kinh độ, lat: vĩ đọ
    coord: {
        lon: number;
        lat: number;
    };
    // Weather information
    weather: Array<{
        id: number;  // Weather condition ID
        main: string;  // Loại thời tiết chính ( ví dụ "Clear", "Clouds", "Rain", ...)
        description: string; // Description of the weather condition such as "clear sky", "light rain", etc.
        icon: string; // Mã icon để biểu thị thời tiết
        // Ví dụ: "01d" cho trời quang đãng ban ngày, "02n" cho mây vào ban đêm
    }>;
      main: {
        temp: number;      // Nhiệt độ hiện tại (đơn vị C, độ C)
        feels_like: number; // Nhiệt độ cảm giác (cảm nhận từ cơ thể)
        temp_min: number;   // Nhiệt độ thấp nhất trong ngày
        temp_max: number;   // Nhiệt độ cao nhất trong ngày
        pressure: number;   // Áp suất không khí (hPa)
        humidity: number;   // Độ ẩm (phần trăm)
    };
    // Thông tin về gió: tốc độ, góc và cường độ gió
    wind: {
        speed: number;      // Tốc độ gió (m/s)
        deg: number;        // Góc gió (độ)
        gust: number;       // Cường độ gió mạnh (m/s)
    };
    // Thông tin về mây
    clouds: {
        all: number;  // Tỷ lệ mây che phủ bầu trời (từ 0 đến 100%)
    };
    // Thông tin về quốc gia, giờ mặt trời mọc và lặn
    sys: {
        country: string;    // Mã quốc gia (ví dụ: "GB" cho Anh)
        sunrise: number;    // Thời gian mặt trời mọc (epoch time)
        sunset: number;     // Thời gian mặt trời lặn (epoch time)
    };
    // Múi giờ của thành phố (số giây chênh lệch với UTC)
    timezone: number;   
    // Tên thành phố
    name: string;   // Tên thành phố
    // ID của thành phố trong cơ sở dữ liệu OpenWeatherMap
    id: number;     // ID của thành phố
}

// Định nghĩa dữ liệu thời tiết cho một thành phố (London) với thông tin mẫu
const weatherData: Weather = {
    coord: {
        lon: -0.1257,   // Kinh độ của London
        lat: 51.5085    // Vĩ độ của London
    },
    weather: [
        {
            id: 802,             // ID của tình trạng thời tiết (Clouds)
            main: "Clouds",      // Loại thời tiết chính: Mây
            description: "scattered clouds", // Mô tả chi tiết tình trạng mây
            icon: "03d"          // Icon đại diện cho "scattered clouds"
        }
    ],
    main: {
        temp: 294.86,        // Nhiệt độ hiện tại ở London (đơn vị C)
        feels_like: 294.44,  // Nhiệt độ cảm giác tại London (đơn vị C)
        temp_min: 293.16,    // Nhiệt độ thấp nhất ở London (đơn vị C)
        temp_max: 296.07,    // Nhiệt độ cao nhất ở London (đơn vị C)
        pressure: 1017,      // Áp suất không khí (hPa)
        humidity: 52         // Độ ẩm (52%)
    },
    wind: {
        speed: 2.24,     // Tốc độ gió (m/s)
        deg: 74,         // Góc gió (độ)
        gust: 5.36       // Cường độ gió mạnh (m/s)
    },
    clouds: {
        all: 26           // Tỷ lệ mây che phủ bầu trời (26%)
    },
    sys: {
        country: "GB",    // Quốc gia: Anh (GB)
        sunrise: 1747109495,  // Thời gian mặt trời mọc (epoch time)
        sunset: 1747165334   // Thời gian mặt trời lặn (epoch time)
    },
    timezone: 3600,   // Múi giờ: +1 giờ so với UTC (3600 giây)
    name: "London",   // Tên thành phố: London
    id: 2643743       // ID thành phố trong cơ sở dữ liệu OpenWeatherMap
};

export default weatherData;
