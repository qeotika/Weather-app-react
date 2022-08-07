import React from "react";
import { iconFromUrl } from "../WeatherService/WeatherService";

function Weather({ title, items }) {
  //sends an array of items and map one by one
  console.log(items);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-mono text-orange-300 font-medium w-30 shadow-xl focus: outline-hidden capitalize">
          {" "}
          {title}{" "}
        </p>
      </div>
      <hr className="mt-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div
            key={item.title} //title is unique to the weather(by the hour/day)
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm"> {item.title} </p>
            <img src={iconFromUrl(item.icon)} alt="" className="w-12 my-1" />
            <p>{`${(item.temp - 273.15).toFixed()}º`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
