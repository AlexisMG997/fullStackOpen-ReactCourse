import { useState } from "react";

const StatisticLine = ({feedback, type}) => <p>{type} {feedback[good]}</p>

const Statistics = ({ feedback }) => {
  let feedbackNumber = feedback.good + feedback.bad + feedback.neutral;
  let averageFeedback = (feedback.good - feedback.bad) / feedbackNumber;
  let positiveFeedback = feedback.good / feedbackNumber;
  let averageValue = isNaN(averageFeedback) ? 0 : averageFeedback;
  let positiveValue = isNaN(positiveFeedback) ? 0 : positiveFeedback;
  
  if(feedbackNumber == 0) return(<div>No feedback given</div>)
  else{
    return (
      <>
        <h2>Statistics</h2>
        <StatisticLine feedback={feedback} type={"Good"}/>
        <StatisticLine feedback={feedback} type={"Neutral"}/>
        <StatisticLine feedback={feedback} type={"Bad"}/>
        <p>Good {feedback.good}</p>
        <p>Neutral {feedback.neutral}</p>
        <p>Bad {feedback.bad}</p>
        <p>All {feedbackNumber}</p>
        <p>Average {averageValue}%</p>
        <p>Positive {positiveValue}%</p>
      </>
    );
  }

};

const Button = ({ handleInput, type }) => (
  <button onClick={handleInput}>{type}</button>
);

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = (input) => {
    const newValues = {
      ...feedback,
      [input]: feedback[input] + 1,
    };
    setFeedback(newValues);
  };

  return (
    <>
      <h2>Give Feedback</h2>
      <Button handleInput={() => handleClick("good")} type={"good"} />
      <Button handleInput={() => handleClick("neutral")} type={"neutral"} />
      <Button handleInput={() => handleClick("bad")} type={"bad"} />
      <Statistics feedback={feedback} />
    </>
  );
};
export default App;
