import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
