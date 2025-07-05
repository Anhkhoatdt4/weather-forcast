package com.qlda.weatherbackend.service;

import com.qlda.weatherbackend.entity.CityWeather;
import com.qlda.weatherbackend.entity.WeatherHistory;
import com.qlda.weatherbackend.repository.CityWeatherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WeatherService {

    private final CityWeatherRepository cityWeatherRepository;
    private final RestTemplate restTemplate = new RestTemplate();

    private final String API_KEY = "5573a428f06aea8122f749ca490e8d6c";

    public CityWeather getCurrentWeather(String cityName){
        String url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API_KEY + "&units=metric";
        System.out.println("Fetching forecast for city: " + url);
        var response = restTemplate.getForObject(url, java.util.Map.class);
        if (response == null) return null;
        System.out.println("Response: " + response);
        var main = (java.util.Map<?, ?>) response.get("main");
        var weatherArr = (List<?>) response.get("weather");
        var weather = (java.util.Map<?, ?>) (weatherArr != null && !weatherArr.isEmpty() ? weatherArr.get(0) : null);
        var wind = (java.util.Map<?, ?>) response.get("wind");

        WeatherHistory currentWeather = WeatherHistory.builder()
                .date(LocalDate.now())
                .temperature(((Number) main.get("temp")).doubleValue())
                .weatherMain(weather != null ? (String) weather.get("main") : null)
                .weatherDescription(weather != null ? (String) weather.get("description") : null)
                .windSpeed(wind != null ? ((Number) wind.get("speed")).doubleValue() : 0.0)
                .humidity(((Number) main.get("humidity")).intValue())
                .build();

        return CityWeather.builder()
                .cityName(cityName)
                .country((String) ((java.util.Map<?, ?>) response.get("sys")).get("country"))
                .weatherHistory(List.of(currentWeather))
                .build();
    }

    public CityWeather getForecastWeather(String cityName) {
        String url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + API_KEY + "&units=metric";
        var response = restTemplate.getForObject(url, java.util.Map.class);

        if (response == null || response.get("list") == null) return null;
        System.out.println("Fetching forecast for city: " + url);
        System.out.println("Response: " + response);
        // Xử lý response cho forecast (code hiện tại của bạn)
        List<?> list = (List<?>) response.get("list");
        List<WeatherHistory> forecasts = list.stream().map(item -> {
            var map = (java.util.Map<?, ?>) item;
            var main = (java.util.Map<?, ?>) map.get("main");
            var weatherArr = (List<?>) map.get("weather");
            var weather = (java.util.Map<?, ?>) (weatherArr != null && !weatherArr.isEmpty() ? weatherArr.get(0) : null);
            var wind = (java.util.Map<?, ?>) map.get("wind");
            String dt_txt = (String) map.get("dt_txt");

            return WeatherHistory.builder()
                    .date(LocalDate.parse(dt_txt.substring(0, 10)))
                    .temperature(((Number) main.get("temp")).doubleValue())
                    .weatherMain(weather != null ? (String) weather.get("main") : null)
                    .weatherDescription(weather != null ? (String) weather.get("description") : null)
                    .windSpeed(wind != null ? ((Number) wind.get("speed")).doubleValue() : 0.0)
                    .humidity(((Number) main.get("humidity")).intValue())
                    .build();
        }).collect(Collectors.toList());

        String country = "";
        if (response.get("city") != null) {
            var cityInfo = (java.util.Map<?, ?>) response.get("city");
            country = (String) cityInfo.get("country");
        }
        System.out.println("Country: " + country);

        return CityWeather.builder()
                .cityName(cityName)
                .country(country)
                .weatherHistory(forecasts)
                .build();
    }

    public CityWeather getCityWeather(String cityName, boolean isForecast) {
        CityWeather cachedCityWeather = cityWeatherRepository.findById(cityName).orElse(null);
       if (cachedCityWeather != null) {
           return cachedCityWeather;
       }

       CityWeather cityWeather ;
       if (isForecast){
           cityWeather = getForecastWeather(cityName);
       } else {
           cityWeather = getCurrentWeather(cityName);
       }
       if (cityWeather != null) {
           cityWeatherRepository.save(cityWeather);
       }
       return cityWeather;
    }

}
