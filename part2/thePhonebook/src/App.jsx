import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";
import personService from "./services/person";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Obtaining data from RESTApi
  useEffect(() => {
    // axios.get('http://localhost:3001/persons')
    // .then( response => {
    //   const data = response.data;
    //   setPersons(data);
    // })
    personService.getAll().then((result) => setPersons(result));
  }, []);

  // Adding new person
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    let copyPersons = persons;
    let foundPerson = copyPersons.filter((p) => p.name === personObject.name);
    if (!copyPersons.find((x) => x.name === newName)) {
      // setPersons(persons.concat(personObject));
      personService
        .create(personObject)
        .then((newPerson) => setPersons(persons.concat(newPerson)));
      copyPersons = persons.concat(personObject);
    } else {
      const id = foundPerson[0].id;
      confirm(
        `${newName} is already added to the Phonebook, replace the old number with a new one?`
      ) &&
        personService
          .update(foundPerson[0].id, personObject)
          .then((result) =>
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : personObject
              )
            )
          );
    }
    setNewName("");
    setNewNumber("");
  };

  // Deleting person
  const deletePerson = (id) => {
    console.log(`Person deleted with id number ${id}`);
    personService
      .remove(id)
      .then((result) => setPersons(persons.filter((p) => p.id !== id)));
  };

  // Applying filters
  const filterResult = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    console.log(persons.find((x) => x.name === value || x.number === value));
    setFilter(persons.find((x) => x.name === value || x.number === value));
  };

  // Adding person name
  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  // Adding phone number
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filterResult={filterResult} />
      <PersonForm
        key={persons.length}
        addPerson={addPerson}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        newNum={newName}
        newNumber={newNumber}
      />
      <Persons persons={persons} filters={filter} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
