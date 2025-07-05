package com.qlda.weatherbackend.controller;

import com.qlda.weatherbackend.entity.CityWeather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.qlda.weatherbackend.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {
    @Autowired
    private WeatherService weatherService;

    @GetMapping("/{city}")
    public CityWeather getWeather(@PathVariable String city, @RequestParam(required = false, defaultValue = "false") boolean forecast) {
        return weatherService.getCityWeather(city, forecast);
    }
}