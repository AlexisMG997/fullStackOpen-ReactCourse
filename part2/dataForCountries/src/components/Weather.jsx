import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ latitude, longitude, country }) => {
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_SOME_KEY;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let icon;
  console.log(apiKey);

  useEffect(() => {
    axios.get(weatherUrl).then((result) => {
      console.log(result.data);
      setData(result.data);
    });
    console.log(icon);
  }, []);

  return (
    <>
      {data != null ?
        <>
          <h3>Wheather in </h3>
          <p>Temperature {data.main.temp} Celcius</p>
          {data != null && <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].icon} />}
          <p>Wind {data.wind.speed} m/s</p>
        </>
        : ''}
    </>
  );
};

export default Weather;
