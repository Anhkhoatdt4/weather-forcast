export interface Activity {
  id: number;
  title: string;
  image: string;
  distance: string;
  weatherTypes: string[];
  cities: string[];
  isFeatured?: boolean;
}

export const activityList: Activity[] = [
  {
    id: 1,
    title: 'Visit Central Park',
    image: 'https://i.pinimg.com/736x/7d/70/98/7d7098d651c290ba65a0cd6c0ff9ac5e.jpg',
    distance: '2km away',
    weatherTypes: ['sunny', 'cloudy'],
    cities: ['New York', 'London', 'Paris', 'Da Nang'],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Kayaking at West Lake',
    image: 'https://i.pinimg.com/736x/95/52/4b/95524b9219991aadaffda23ade398610.jpg',
    distance: '3km away',
    weatherTypes: ['sunny'],
    cities: ['Hanoi', 'Bangkok', 'Singapore'],
  },
  {
    id: 3,
    title: 'Beach Walk',
    image: 'https://i.pinimg.com/736x/80/ec/44/80ec44668483b803b953e13b38561f0a.jpg',
    distance: '1km away',
    weatherTypes: ['sunny', 'mist'],
    cities: ['Da Nang', 'Nha Trang', 'Sydney', 'Los Angeles'],
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Mountain Resort',
    image: 'https://i.pinimg.com/736x/c5/d3/12/c5d312d6623da7928e2b47d163eb94db.jpg',
    distance: '15km away',
    weatherTypes: ['mist', 'cloudy'],
    cities: ['Da Lat', 'Tokyo', 'Seoul','Da Nang'],
  },
  {
    id: 5,
    title: 'Museum Visit',
    image: 'https://i.pinimg.com/736x/6f/c6/90/6fc690a71da144be8d537ef25b5d11cf.jpg',
    distance: '2km away',
    weatherTypes: ['rain', 'cloudy'],
    cities: ['Hanoi', 'Ho Chi Minh', 'Hue', 'Paris', 'Berlin','Da Nang'],
  },
  {
    id: 6,
    title: 'Cozy Book Café',
    image: 'https://i.pinimg.com/736x/3e/41/4d/3e414da2ba55d5cc59f3ebf543a5a2ff.jpg',
    distance: '1km away',
    weatherTypes: ['rain', 'mist', 'cloudy'],
    cities: ['Da Lat', 'Hue', 'Tokyo', 'Seoul'],
    isFeatured: true,
  },
  {
    id: 7,
    title: 'Hot Springs Relaxation',
    image: 'https://i.pinimg.com/736x/8a/13/a1/8a13a1b1467ed1c3cf995ddaa2bda5a8.jpg',
    distance: '6km away',
    weatherTypes: ['snow'],
    cities: ['Sapa', 'Seoul', 'Hokkaido'],
  },
  {
    id: 8,
    title: 'Snow Photography Walk',
    image: 'https://i.pinimg.com/736x/4f/c2/4a/4fc24a90aaf52b17766711311811b5da.jpg',
    distance: '3km away',
    weatherTypes: ['snow'],
    cities: ['Sapa', 'Tokyo', 'Zurich'],
  },
  {
    id: 9,
    title: 'Boating in the Bay',
    image: 'https://i.pinimg.com/736x/8e/ca/c5/8ecac531dffe269b17f6869662610d1d.jpg',
    distance: '10km away',
    weatherTypes: ['sunny'],
    cities: ['Ha Long', 'Sydney', 'Singapore'],
    isFeatured: true,
  },
  {
    id: 10,
    title: 'Trekking in the Hills',
    image: 'https://i.pinimg.com/736x/59/81/55/5981557c4b161e3884368d45ca356e9e.jpg',
    distance: '12km away',
    weatherTypes: ['mist', 'cloudy'],
    cities: ['Sapa', 'Hue', 'Seoul', 'Tokyo', 'Da Nang'],
  },
  {
    id: 11,
    title: 'Historical Walking Tour',
    image: 'https://i.pinimg.com/736x/f8/94/c0/f894c0209b7015575d9a3411662e3634.jpg',
    distance: '1km away',
    weatherTypes: ['sunny', 'cloudy'],
    cities: ['Hue', 'Hanoi', 'Paris', 'Rome'],
  },
  {
    id: 12,
    title: 'Camping by the Stream',
    image: 'https://i.pinimg.com/736x/a6/5f/37/a65f374ab1597bd917d18b518cc4a9d8.jpg',
    distance: '8km away',
    weatherTypes: ['mist'],
    cities: ['Da Lat', 'Sapa', 'Chiang Mai'],
  },
];

export default activityList;

export const getActivitiesByWeather = (weatherType: string, city: string): Activity[] => {
  return activityList.filter((activity: Activity) => {
    return activity.weatherTypes.includes(weatherType) && activity.cities.includes(city);
  });
};
