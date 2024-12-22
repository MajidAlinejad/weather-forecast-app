/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { fetch7DayForecast, fetchCurrentWeather } from "../utils/api";
import {
  ForecastData,
  UseWeatherDataResult,
  WeatherData,
} from "../types/types";

export const useWeatherData = (
  latitude?: number | null,
  longitude?: number | null
): UseWeatherDataResult => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refreshData = async () => {
    if (latitude && longitude) {
      setLoading(true);
      setError(null);
      try {
        const currentWeather = await fetchCurrentWeather(latitude, longitude);
        const sevenDayForecast = await fetch7DayForecast(latitude, longitude);
        setCurrentWeather({
          city_name: currentWeather.city_name,
          country_code: currentWeather.country_code,
          temperature: currentWeather.temp,
          description: currentWeather.weather.description,
          icon: currentWeather.weather.icon,
          datetime: currentWeather.datetime,
        });
        const forecastData = sevenDayForecast.data.splice(1, 7).map((day) => ({
          date: day.datetime,
          temperature: day.temp,
          description: day.weather.description,
          icon: day.weather.icon,
        }));

        setForecast(forecastData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err: unknown) {
        setError("Failed to fetch current weather data.");
      }
      setLoading(false);
    } else {
      setError("Location is not available.");
    }
  };

  useEffect(() => {
    refreshData();
  }, [latitude, longitude]);

  return { currentWeather, forecast, loading, error, refreshData };
};
