import { useState } from "react";
import "./App.css";

function App() {
// function first( parent to child)
const data = "Hello Child"
  

//function First1(child to parent)
const [message, setMessage] = useState("");
const getData = (data) => {
  console.log("Got data from child", data)
  setMessage(data);
}

// const ballCount = 50;

  return (
    <div className="App">
      {/* Current Over: {`${Math.floor(ballCount/6)}.${ballCount % 6}`} */}
      
      
      <First data={data}></First>
      <First1 dataFn={getData}></First1>
      <Second message={message}></Second>
    </div>
  );
}

//Remember state dedicated for perticular function only

function First({data}){
  //parent to child
  console.log("Recived data from parent,", data);
  //const [x, setX] = useState(30);
  return <div>First Child</div>
}


function First1({dataFn}){
//child to parent
const dataChild = "Hello Child TO parent";
//dataFn(dataChild);

  return <div>First1 Child,
    <button
      onClick={() => {
        dataFn(dataChild)
      }}
    >
      Send Data
    </button>
  </div>
}

//sibiling to sibiling
function Second({message}){
  console.log("Got data from Sibling:", message);
  return <div>Second Child,{message}</div>
}
export default App;
