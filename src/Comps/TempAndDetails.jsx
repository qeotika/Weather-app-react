import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";
import { UilTemperaturePlus } from "@iconscout/react-unicons";
import { UilSunset } from "@iconscout/react-unicons";
import { UilTemperatureMinus } from "@iconscout/react-unicons";
import { formatToLocalTime } from "../WeatherService/WeatherService";
import { iconFromUrl } from "../WeatherService/WeatherService";

function TempAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-white">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconFromUrl(icon)} alt="" className="w-20" />
        <p className="text-5xl text-white">{`${(temp - 273.15).toFixed()}º`}</p>
        {/* //kelvin to C  */}
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">{`${(
              feels_like - 273.15
            ).toFixed()}º`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1"> {`${humidity}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Sunrise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font-light"></p>

        <UilSunset />
        <p className="font-light">
          Sunset:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font-light"></p>

        <UilTemperaturePlus />
        <p className="font-light">
          High: <span className="font-medium ml-1"></span>{" "}
          {`${(temp_max - 273.15).toFixed()}º`}
        </p>
        <p className="font-light"></p>

        <UilTemperatureMinus />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${(
            temp_min - 273.15
          ).toFixed()}º`}</span>
        </p>
        <p className="font-light"></p>
      </div>
    </div>
  );
}

export default TempAndDetails;
