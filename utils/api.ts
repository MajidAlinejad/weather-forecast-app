import {
  CurrentWeatherDataRequest,
  DailyForecastDataRequest,
} from "@/types/types";
import axios from "axios";
const WEATHERBIT_API_URL = "https://api.weatherbit.io/v2.0";

export const fetchCurrentWeather = async (
  latitude: number,
  longitude: number
) => {
  const response = await axios.get<CurrentWeatherDataRequest>(
    `${WEATHERBIT_API_URL}/current`,
    {
      params: {
        lat: latitude,
        lon: longitude,
        key: process.env.NEXT_PUBLIC_WEATHERBIT_API_KEY,
      },
    }
  );
  return response.data.data[0];
};

export const fetch7DayForecast = async (
  latitude: number,
  longitude: number
) => {
  const response = await axios.get<DailyForecastDataRequest>(
    `${WEATHERBIT_API_URL}/forecast/daily`,
    {
      params: {
        lat: latitude,
        lon: longitude,
        key: process.env.NEXT_PUBLIC_WEATHERBIT_API_KEY,
      },
    }
  );
  return response.data;
};
