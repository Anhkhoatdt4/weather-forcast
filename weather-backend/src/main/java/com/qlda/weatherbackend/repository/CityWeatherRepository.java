package com.qlda.weatherbackend.repository;

import com.qlda.weatherbackend.entity.CityWeather;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityWeatherRepository extends CrudRepository<CityWeather, String> {

    // Custom query methods can be defined here if needed
    // For example, to find by city name:
    // Optional<CityWeather> findByCityName(String cityName);
}
