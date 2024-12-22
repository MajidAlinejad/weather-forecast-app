/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CurrentWeather from "@/components/CurrentWeather";
import ErrorWrapper from "@/components/ErrorWrapper";
import ForecastList from "@/components/ForecastList";
import { Skeleton } from "@/components/Skeleton";
import useGeolocation from "@/hooks/useGeoLocation";
import { useWeatherData } from "@/hooks/useWeatherData";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { error, location } = useGeolocation();
  const {
    currentWeather,
    error: weatherError,
    forecast,
    loading,
    refreshData,
  } = useWeatherData(location?.latitude, location?.longitude);
  console.log(currentWeather, weatherError, forecast, loading);

  return (
    <ErrorWrapper error={weatherError || error}>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-full p-4">
          <CurrentWeather
            city={currentWeather?.city_name}
            temperature={currentWeather?.temperature}
            description={currentWeather?.description}
            icon={currentWeather?.icon}
          />
          <ForecastList forecast={forecast} />
        </div>
      )}
    </ErrorWrapper>
  );
}
