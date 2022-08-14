import React from "react";
import { iconFromUrl } from "../../WeatherService/WeatherService";

function Weather({ title, items }) {
  //sends an array of items and map one by one
  console.log(items);
  return (
    <div>
      <div className="main_Container">
        {/* flex items-center justify-start mt-6 */}
        <p className="title_Container">
          {/* font-mono text-orange-300 font-medium w-30  focus: outline-hidden capitalize */}{" "}
          {title}{" "}
        </p>
      </div>
      <hr className="mt" />
      {/* mt-2 */}
      <div className="item_Map ">
        {/* flex flex-row items-center justify-between  text-white */}
        {items.map((item) => (
          <div
            key={item.title} //title is unique to the weather(by the hour/day)
            className="each_Item "
          >
            {/* flex flex-col items-center justify-center */}
            <p className="item_Title"> {item.title} </p>
            {/* font-light text-sm" */}
            <img src={iconFromUrl(item.icon)} alt="" className="icon_Prop" />
            {/* w-12 my-1 */}
            <p>{`${(item.temp - 273.15).toFixed()}º`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
