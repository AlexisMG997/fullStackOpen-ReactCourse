import React from 'react'

const Data = ({country}) => {
  return (
    <div>
      {country.length <= 10 ? country.map( (result, index) => {
        <p key={index}>{result.name}</p>
      }) : <p>Too many matches, specify another filter</p>}
    </div>
  )
}

export default Data;