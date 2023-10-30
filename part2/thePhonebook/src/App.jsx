import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then( response => {
      const data = response.data;
      setPersons(data);
    })
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    let copyPersons = persons;
    if (!copyPersons.find((x) => x.name === newName)) {
      setPersons(persons.concat(personObject));
      copyPersons = persons.concat(personObject);
    } else {alert("Name cannot be the same that one from the list");}
    setNewName("");
    setNewNumber("");
  };

  const filterResult = (event) => {
    console.log(event.target.value);
    const value = event.target.value; 
    console.log(persons.find((x) => x.name === value || x.number === value));
    setFilter(persons.find((x) => x.name === value || x.number === value));
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filterResult={filterResult}/>
      <PersonForm
      key={persons.length}
        addPerson={addPerson}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        newNum={newName}
        newNumber={newNumber}
      />
      <Persons persons={persons} filters={filter} />
    </div>
  );
}

export default App;
