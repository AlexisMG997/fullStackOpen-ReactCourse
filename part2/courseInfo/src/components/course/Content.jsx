import React from "react";
import Part from "./Part";

const Content = ({ content }) => {
  const sum = content.reduce((accum, currentValue) => {
    return accum + currentValue.exercises;
  }, 0);
  return (
    <>
      {content.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p style={{fontWeight:'bold'}}>Total of {sum} exercises</p>
    </>
  );
};

export default Content;
