import Image from "next/image";
import React from "react";
import Clock from "./Time";

interface CurrentWeatherProps {
  temperature?: number;
  description?: string;
  city?: string;
  icon?: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  temperature,
  description,
  icon,
  city,
}) => {
  return (
    <div className="p-6 w-full bg-gradient-to-t from-slate-800 to-slate-300 rounded-lg shadow-md text-center h-full">
      <h1 className="text-2xl font-bold">{city}</h1>
      <div className="my-4 flex flex-col items-center">
        <Image
          src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
          alt="Weather Icon"
          width={16}
          height={16}
          className="w-16 h-16"
        />
        <p className="text-lg">{description}</p>
        <p className="text-4xl font-bold">{temperature}°C</p>
        <Clock />
      </div>
    </div>
  );
};

export default CurrentWeather;
