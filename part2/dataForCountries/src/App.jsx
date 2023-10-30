import { useEffect, useState } from "react";
import Data from "./components/data";
import countryService from "./services/country";

function App() {
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    countryService.getAll().then((result) => setCountry(result));
  }, []);

  // Searching on country results
  const filterCountry = () => {
    const countryCopy = country;
    console.log(country);
    console.log(countryCopy.filter(c => c.name.common == filter));
  }

  // Getting filter value
  const handleCountrySearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const value = event.target.value;
    setFilter(value);
    filterCountry();
  };
  return (
    <>
      <p>
        Find countries <input type="search" onChange={handleCountrySearch} />
      </p>
      <Data country={country} />
    </>
  );
}

export default App;
