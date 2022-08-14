import "./App.css";
import UitStar from "@iconscout/react-unicons-thinline/icons/uit-star";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./Comps/TopButtons/TopButtons";
import Inputs from "./Comps/Inputs/Inputs";
import TimeLocation from "./Comps/TimeLocation/TimeLocation";
import TempAndDetails from "./Comps/TempAndDetails/TempAndDetails";
import WeatherForecast from "./Comps/WeatherForecast/WeatherForecast";
import getWeatherData from "./WeatherService/WeatherService"; //alt shift f - prettier
import {
  getForecastForCoords,
  getFormattedWeatherData,
} from "./WeatherService/WeatherService";
import { useEffect } from "react";
import { useState } from "react";
import Understand from "./Comps/Understand/Understand";
import Email from "./Comps/Email/Email";

function App() {
  // const obj = {
  //   timezone: "",
  //   daily: [],
  //   hourly: [],
  //   lat: "",
  //   lon: "",
  //   temp: "",
  //   feels_like: "",
  //   temp_min: "",
  //   temp_max: "",
  //   humidity: "",
  //   name: "",
  //   dt: "",
  //   country: "",
  //   sunrise: "",
  //   sunset: "",
  //   details: "",
  //   icon: "",
  //   speed: ""
  // }

  const [query, setQuery] = useState({ q: "jerusalem" });
  const [cityCords, setCityCords] = useState({});
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query }).then((data) => {
        setWeather(data);
        // ...data, daily: data.daily, hourly: data.hourly}
        console.log(data);
      });
    };
    fetchWeather();
  }, [query]);
  return (
    <div className="app_container">
      {/* mx-auto max-w-screen-2xl py-6 px-32 bg-gradient-to-br from-gray-800 to-sky-400 h-fit shadow-xl shadow-gray-400 */}
      <Inputs setQuery={setQuery} />
      <TopButtons setQuery={setQuery} />
      <Understand />
      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <WeatherForecast title={"Hourly forecast"} items={weather.hourly} />
          {/* //Objects in js do not have .map().Only arrays */}
          <WeatherForecast title="Daily forescast" items={weather.daily} />
        </div>
      )}
      <div>
        <Email />
      </div>
    </div>
  );
}

export default App;
