package com.qlda.weatherbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@RedisHash("CityWeather")
public class CityWeather implements Serializable {
    @Id
    private String cityName;
    private String country;
    private List<WeatherHistory> weatherHistory;

}
