import { useState } from "react";

const StatisticLine = ({ feedback, type }) => (
  <table>
    <tr>
      <td width={50}>{type}</td>
      <td width={50}>{feedback[type.toLowerCase()]}</td>
    </tr>
  </table>
);

const Statistics = ({ feedback }) => {
  let feedbackNumber = feedback.good + feedback.bad + feedback.neutral;
  let averageFeedback = (feedback.good - feedback.bad) / feedbackNumber;
  let positiveFeedback = feedback.good / feedbackNumber;
  let averageValue = isNaN(averageFeedback)
    ? 0
    : averageFeedback.toString().substring(0, 3);
  let positiveValue = isNaN(positiveFeedback)
    ? 0
    : positiveFeedback.toString().substring(0, 3);

  if (feedbackNumber == 0) return <div>No feedback given</div>;
  else {
    return (
      <>
        <h2>Statistics</h2>
        <StatisticLine feedback={feedback} type={"Good"} />
        <StatisticLine feedback={feedback} type={"Neutral"} />
        <StatisticLine feedback={feedback} type={"Bad"} />
        <table>
          <tr>
            <td width={50}>All</td>
            <td width={50}> {feedbackNumber}</td>
          </tr>
          <tr>
            <td width={50}>Average </td>
            <td width={50}>{averageValue}%</td>
          </tr>
          <tr>
            <td width={50}>Positive </td>
            <td width={50}>{positiveValue}%</td>
          </tr>
        </table>
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
