package com.qlda.weatherbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WeatherHistory implements Serializable {
    private LocalDate date;
    private Double temperature;
    private String weatherMain;
    private String weatherDescription;
    private double windSpeed;
    private int humidity;

}
