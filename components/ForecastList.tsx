import Image from "next/image";
import React from "react";

interface ForecastDay {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

interface ForecastListProps {
  forecast?: ForecastDay[] | null;
}

const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  return (
    <div className="p-6 bg-slate-800 w-full rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold text-center mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-7 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-4 ">
        {forecast?.map((day, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-b from-slate-500 to-slate-600 rounded-lg shadow-md text-center"
          >
            <p className="text-lg font-bold">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>
            <Image
              src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`}
              alt="Weather Icon"
              width={16}
              height={16}
              className="w-12 h-12 mx-auto my-2"
            />
            <p className="text-lg">{day.description}</p>
            <p className="text-2xl font-bold">{day.temperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
