import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/**const App = () =>{
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a+b);
  return(
    <div>
      <p>
        {a} plus {b} is a {a + b}
      </p>
    </div>
  )
}
**/

/**const Hello = () =>{
  return(
    <div>
      <p>Hello World!</p>
    </div>
  )
}

const App = () =>{
  return(
    <div>
        <h1>Greetings</h1>
        <Hello/>
    </div>
  )
}
**/

/** const Hello = (props) =>{
  console.log(props);
  return(
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </div>
  )
}

const App = () =>{
  const name = 'Peter';
  const age = 10;

  return(
    <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10}/>
        <Hello name={name} age={age}/>
    </div>
  )
}

const Hello = (props) =>{
  console.log(props);
  return(
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </div>
  )
}
**/

/**const App = () =>{
  const friends = [
    { name: 'Peter', age: 4},
    { name: 'John', age:5 },
  ]
  return(
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}**/

/**const App = () =>{
  const friends = ['Peter', 'John']
  return(
    <div>
      <p>{friends}</p>
    </div>
  )
}
**/

// Component helper functions

/**const Hello = (props) =>{
  const {name, age} = props;

  // const name = props.name;
  // const age = props.age;

  const bornYear = () => new Date().getFullYear();

  // const bornYear = () =>{
  //   const yearNow = new Date().getFullYear();
  //   return yearNow - age;
  // }

  return (
    <div>
      <p>
        Hello {name}, you're {age} years old
      </p>
      <p>
        So you're probably born in {bornYear()}
      </p>
    </div>
  )
}**/

// Desctructing

/**const Hello = ({name, age}) =>{
  const bornYear = () => new Date().getFullYear();

  return (
    <div>
      <p>
        Hello {name}, you're {age} years old
      </p>
      <p>
        So you're probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () =>{
  const name = "Peter";
  const age = 10;

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} /> 
      <Hello name={name} age={age} />
    </div>
  )
}**/

// Part1-C .- Page re-rendering

/**const App = (props) => {
  const {counter} = props;
  return(
    <div>{counter}</div>
  )
}**/

// Part1-C .- Stateful component

/**const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);
  console.log('rendering... '+counter);
  return(
    <div>
      {counter}
    </div>
  )
}**/

// Part1-C .- Event handling

/**const Display = (props) => {
  return (
    <>
      <div>{props.counter}</div>
    </>
  );
};

const IncrementCounter = (props) => {
  const increasedByOne = () => {
    props.setCounter(props.counter + 1);
  };

  return <button onClick={increasedByOne}>Plus</button>;
};

const ResetCounter = (props) => {
  const setToZero = () => {
    props.setCounter(0);
  };
  return <button onClick={setToZero}>Zero</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Display counter={counter} />
      <IncrementCounter setCounter={setCounter} counter={counter} />
      <ResetCounter setCounter={setCounter} counter={counter} />
    </div>
  );
};**/

/**const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);
  console.log('rendering... '+counter);
  return(
    <div>
      {counter}
    </div>
  )
}**/

// Part1-C .- Event handling

/**const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({onClick, type}) => <button onClick={onClick}>{type}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increasedByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decresedByOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increasedByOne} type="Plus" />
      <Button onClick={setToZero} type="Zero" />
      <Button onClick={decresedByOne} type="Minus" />
    </div>
  );
};**/

// Part1-D .- Complex State

/**const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    right: 0,
    left: 0,
  });

  // const handleRightClick = () =>{
  //   // const newClicks = {
  //   //   right: clicks.right + 1,
  //   //   left: clicks.left,
  //   // }
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1,
  //   }
  //   setClicks(newClicks);
  // }
  // const handleLeftClick = () =>{
  //   // const newClicks = {
  //   //   right: clicks.right,
  //   //   left: clicks.left+1,
  //   // }
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left+1,
  //   }
  //   setClicks(newClicks);
  // }

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 });

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};**/

// Part1-D .- Conditional Rendering

/**const History = ({ allClicks }) => {
  if (allClicks.length === 0)
    return <div> The app is using by pressing the buttons</div>;
  return <div>button press history: {allClicks.join(" ")}</div>;
};

const Button = ({onClick, type}) => <button onClick={onClick}>{type}</button>;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };
  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} type={"left"}/>
      <Button onClick={handleRightClick} type={"right"}/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  );
};**/

const Display = ({value}) => <div>{value}</div>

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("Value now ", newValue);
    setValue(newValue);
  }

  return (
    <div>
      <Display value={value}/>
      <button onClick={() => setToValue(10000)}>Thousand</button>
      <button onClick={() => setToValue(0)}>Reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button>
    </div>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>
);

  