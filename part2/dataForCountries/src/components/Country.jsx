import React, { useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const Country = ({ country }) => {
  const result = country[0];
  const latitude = result.latlng[0];
  const longitude = result.latlng[1];

  console.log(country);
  console.log(latitude, longitude);

  return (
    <>
      <h1>{result.name.common}</h1>
      <p>Capital {result.capital}</p>
      <p>Area {result.area}</p>
      <ul>
        {Object.values(result.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={result.flags.png} alt={result.name.common} />
      <Weather latitude={latitude} longitude={longitude} country={result.name.common} />
    </>
  );
};

export default Country;
