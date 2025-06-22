

interface BackgroundData {
    id : number;
    weatherTypes: string;
    image: string;
    apiMain: string;
}

const backgroundData: BackgroundData[] = [
    {
        id: 1,
        weatherTypes: "Sunny",
        apiMain: "Clear",
        image: "https://plus.unsplash.com/premium_photo-1676320125952-85ced2f39d7f"
    },
    {
        id: 2,
        weatherTypes: "Rainy",
        apiMain: "Rain",
        image: "https://images.unsplash.com/photo-1697178440406-cfe425dc5d04"
    },
    {
        id: 3,
        weatherTypes: "Cloudy",
        apiMain: "Clouds",
        image: "https://images.unsplash.com/photo-1626407465819-6d36ff9976a0"
    },
    {
        id: 4,
        weatherTypes: "Foggy",
        apiMain: "Mist", // Có thể là "Mist", "Haze", "Fog", "Smoke", v.v.
        image: "https://images.unsplash.com/photo-1693501035619-5dd4ce1ccd11"
    },
    {
        id: 5,
        weatherTypes: "Snowy",
        apiMain: "Snow",
        image: "https://images.unsplash.com/photo-1552910996-e666ad64695c"
    },
    {
        id: 6,
        weatherTypes: "Thunderstorm",
        apiMain: "Thunderstorm",
        image: "https://images.unsplash.com/photo-1537210249814-b9a10a161ae4"
    }
];

export const getBackgroundImageFromWeather = (apiMain: string) => {
    // console.log('apiMain nhận vào:', apiMain);
    const background = backgroundData.find((weatherD) => {
        // console.log('So sánh với:', weatherD.apiMain);
        return weatherD.apiMain === apiMain;
    });
    // console.log('Kết quả tìm thấy:', background);
    return background?.image;
};