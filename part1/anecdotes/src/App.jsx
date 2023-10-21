import { useState } from "react";

const TopAnecdote = ({ anecdotes, mostRepeatedIndex }) => {
  const quantity = mostRepeatedIndex.length > 1 ? true : false;
  console.log(quantity);
  return (
    <>
      <h1>Anecdote{quantity && 's'} with most votes</h1>
      {mostRepeatedIndex.map((value, index) => {
        return <p key={index}>{anecdotes[value]}</p>;
      })}
    </>
  );
};

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const points = new Uint8Array(anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);
  const [mostRepeatedIndex, setMostRepeatedIndex] = useState([]);
  let votesCopy;
  let mostVoted = [];

  const handleAnecdote = () => {
    const logValue = Math.floor(Math.random() * 8);
    setSelected(logValue);
    console.log(logValue);
  };

  const handleVotes = (index) => {
    let newIndexContainer = [];
    votesCopy = [...votes];
    votesCopy[index] += 1;
    setVotes(votesCopy);
    let a = [...votesCopy];
    a.sort();
    mostVoted = a[votesCopy.length - 1];
    console.log(mostVoted);
    votesCopy.map((val, index) => {
      if (val == mostVoted) {
        newIndexContainer.push(index);
      }
    });
    setMostRepeatedIndex(newIndexContainer);
    console.log(newIndexContainer);
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <p>{votes}</p>
      <p>Has {votes[selected]}</p>
      <button onClick={handleAnecdote}>Random Anecdote</button>
      <button onClick={() => handleVotes(selected)}>Vote</button>
      <TopAnecdote
        anecdotes={anecdotes}
        mostRepeatedIndex={mostRepeatedIndex}
      />
    </>
  );
}

export default App;
