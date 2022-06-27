import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Category from "./components/category";

const navbar = [
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top offers",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery",
  },
];

function App() {
  const [counter, setCounter] = useState(0);
  // const handleAdd = () => {
  //   if(counter >= 10)
  //   {
  //     return;
  //   }
  //   setCounter(counter+1)
  // };

  // const subHandleAdd = () => {
  //   if(counter <= 0)
  //   {
  //     return;
  //   }
  //   setCounter(counter-1)
  // };

  const handleChange = (value) => {
    setCounter(counter + value);
  };
  if (counter >= 10) {
    return <h1>Hii</h1>;
  }

  return (
    (
      <div className="navbar">
        {navbar.map((e) => (
          <Category image={e.image} label={e.title}></Category>
        ))}
      </div>
    ),
    (
      <div className="App">
        <h1>Counter:{counter}</h1>
        <button
          onClick={() => {
            handleChange(1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            if (counter > 0) {
              handleChange(-1);
            }
          }}
        >
          Sub
        </button>
        <div>{counter % 2 === 0 ? "Even" : "Odd"}</div>
      </div>
    )
  );
}

export default App;
