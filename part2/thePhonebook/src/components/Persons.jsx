import React from "react";

const Persons = ({ persons, filters }) => {
  const newFilter = [filters];
  return (
    <>
      <h2>Numbers</h2>
      {filters == "" || filters == undefined? persons.map((person) => 
        <p key={person.name}>{person.name} | {person.number}</p>
      ) : 
      newFilter.map((filter) => 
        <p key={filter.number}>{filter.name} | {filter.number}</p>
      )}
    </>
  );
};

export default Persons;
