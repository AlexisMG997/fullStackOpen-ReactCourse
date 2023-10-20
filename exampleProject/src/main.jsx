import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Part1-C .- Page re-rendering

/**let counter =+ 1;
const refresh = () =>{
ReactDOM.createRoot(document.getElementById("root")).render(
  <App counter={counter} />
);
}
setInterval(() =>{
  refresh();
  counter += 1;    
},1000);**/

ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>
);

  