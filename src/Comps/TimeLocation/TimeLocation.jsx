import React from "react";
import { formatToLocalTime } from "../../WeatherService/WeatherService";

function TimeLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="my_time_zone">
        {/* flex flex-center justify-center my-6 */}
        <p className="inner_time_zone">
          {/* text-white text-xl font-extralight */}
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="name_country">
        {/* flex flex-center justify-center my-3 */}
        <p className="name_country_inner">
          {/* text-orange-300 text-xl font-medium shadow-xl */}
          {`${name},${country}`}{" "}
        </p>
      </div>
    </div> //1
  );
}

export default TimeLocation;
