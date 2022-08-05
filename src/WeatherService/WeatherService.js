import {DateTime} from "luxon"

const API_KEY= "b0121a74645781b33cd5f33b52947581";
const BASE_URL="https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType,searchParams,isSpecialUrl = false) =>
{
    let url
   
        url = new URL(BASE_URL + "/" + infoType);
    
    url.search = new URLSearchParams({...searchParams, appid:API_KEY} )
    console.log(url);
    return fetch(url).then((res) => res.json())
}





const formatCurrentWeather = (data) => {
    const {
        coord:{lat,lon},
        main:{temp,feels_like ,temp_min , temp_max, humidity},
        name,
        dt,
        sys: {country,sunrise,sunset},
        weather,
        wind:{speed}
    } =data
    const {main:details, icon} = weather[0]
    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed};

}

export const getForecastForCoords = async (coordinates) =>
{
    const forecast = await getWeatherData("forecast", coordinates).then(res=>res)
    
}

export const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then(formatCurrentWeather);
  
    const { lat, lon } = formattedCurrentWeather;
  
    const formattedForecastWeatherData = await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);
  
    return { ...formattedCurrentWeather, ...formattedForecastWeatherData };
  };

export const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"), //Day
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  
    hourly = hourly.slice(1, 6).map((d) => { //5 days slice
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };
    });
  
    return { timezone, daily, hourly };
  };

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
  
  const iconFromUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

  export {formatToLocalTime,iconFromUrl}

