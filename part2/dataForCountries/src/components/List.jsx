import React, { useEffect } from "react";

const List = ({ country, getCountry }) => {
  return (
    <div>
      {country.length <= 10 ? (
        country.map((result, index) => (
          <div key={index}>
            <p>
              {result.name.common} <button onClick={() => getCountry(result)}>show</button>
            </p>
          </div>
        ))
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
};

export default List;
