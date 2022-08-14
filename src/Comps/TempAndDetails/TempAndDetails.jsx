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
import { formatToLocalTime } from "../../WeatherService/WeatherService";
import { iconFromUrl } from "../../WeatherService/WeatherService";

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
      <div className="details ">
        {/* /flex items-center justify-center py-6 text-xl text-white  */}
        <p>{details}</p>
      </div>

      <div className="icon_temp  ">
        {/* flex flex-row items-center justify-between text-white py-3  */}
        <img src={iconFromUrl(icon)} alt="" className="icon_inner_temp" />
        {/* w-20 */}
        <p className="temp_prop ">{`${(temp - 273.15).toFixed()}º`}</p>
        {/* text-5xl text-white */}
        {/* //kelvin to C  */}
        <div className="side_props">
          {/* flex flex-col space-y-2 */}
          <div className="side_prop_details">
            {/* flex font-light text-sm items-center justify-center shadow-xl */}
            <UilTemperature size={18} className="mr1" />
            {/* mr-1 */}
            Feels like:
            <span className="props_details">{`${(
              feels_like - 273.15
            ).toFixed()}º`}</span>
            {/* font-medium ml-1 */}
          </div>
          <div className="side_prop_details">
            {/* flex font-light text-sm items-center justify-center shadow-xl */}
            <UilTear size={18} className="mr1" />
            {/* mr-1 */}
            Humidity:
            <span className="props_details"> {`${humidity}%`}</span>
            {/* font-medium ml-1 */}
          </div>
          <div className="side_prop_details">
            {/* flex font-light text-sm items-center justify-center shadow-xl */}
            <UilWind size={18} className="mr-1" />
            {/* mr-1 */}
            Wind:
            <span className="props_details">{`${speed} km/h`}</span>
            {/* font-medium ml-1 */}
          </div>
        </div>
      </div>

      <div className="bottom_details">
        {/* flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 */}
        <UilSun />
        <p className="font_weight ">
          {/* font-light */}
          Sunrise:{" "}
          <span className="props_details">
            {/* font-medium ml-1 */}
            {formatToLocalTime(sunrise, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font_weight"></p>
        {/* font-light */}
        <UilSunset />
        <p className="font_weight ">
          {/* font-light */}
          Sunset:{" "}
          <span className="props_details">
            {/* font-medium ml-1" */}
            {formatToLocalTime(sunset, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font_weight"></p>
        {/* font-light */}
        <UilTemperaturePlus />
        <p className="font_weight">
          {/* font-light */}
          High: <span className="props_details"></span>{" "}
          {`${(temp_max - 273.15).toFixed()}º`}
        </p>
        {/* font-medium ml-1" */}
        <p className="font_weight"></p>
        {/* font-light */}
        <UilTemperatureMinus />
        <p className="font_weight ">
          {/* font-light */}
          Low:{" "}
          <span className="props_details">{`${(
            temp_min - 273.15
          ).toFixed()}º`}</span>
          {/* font-medium ml-1" */}
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;
