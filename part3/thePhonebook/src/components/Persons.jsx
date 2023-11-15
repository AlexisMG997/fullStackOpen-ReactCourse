import React from "react";

const Persons = ({ persons, filters, deletePerson }) => {
  const newFilter = [filters];
  return (
    <>
      <h2>Numbers</h2>
      {filters == "" || filters == undefined
        ? persons.map((person) => (
            <p key={person.name}>
              {person.name} | {person.number}{" "}
              <button onClick={() => deletePerson(person.id)}>Delete</button>
            </p>
          ))
        : newFilter.map((filter) => (
            <p key={filter.number}>
              {filter.name} | {filter.number}{" "}
              <button onClick={() => deletePerson(filter.id)}>Delete</button>
            </p>
          ))}
    </>
  );
};

export default Persons;
