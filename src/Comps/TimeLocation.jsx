import React from "react";
import { formatToLocalTime } from "../WeatherService/WeatherService";

function TimeLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex flex-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex flex-center justify-center my-3">
        <p className="text-white text-xl font-medium">
          {`${name},${country}`}{" "}
        </p>
      </div>
    </div> //1
  );
}

export default TimeLocation;
