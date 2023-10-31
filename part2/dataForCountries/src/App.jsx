import { useEffect, useState } from "react";
import List from "./components/List";
import Country from "./components/Country";
import countryService from "./services/country";

function App() {
  const [country, setCountry] = useState([]);
  const [filterResult, setFilterResult] = useState([]);

  useEffect(() => {
    countryService.getAll().then((result) => setCountry(result)).then( finish => console.log(country));
  }, []);

  // Searching on country results
  const filterCountry = (value) => {
    const countryCopy = country;
    console.log(country);
    const result = countryCopy.filter(c => c.name.common.toLowerCase().includes(value.toLowerCase()));
    console.log(result);
    setFilterResult(result);
  }

  // Selecting a country
  const getCountry = (value) => {
    console.log('Country selected:');
    console.log(value);
    setFilterResult([value]);
  }

  // Getting filter value
  const handleCountrySearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const value = event.target.value;
    filterCountry(value);
  };
  return (
    <>
      <p>
        Find countries <input type="search" onChange={handleCountrySearch} />
      </p>
      { filterResult.length != 1 ? 
      <List  country={filterResult} getCountry={getCountry}/>
      :
      <Country country={filterResult} />
      } 
    </>
  );
}

export default App;
