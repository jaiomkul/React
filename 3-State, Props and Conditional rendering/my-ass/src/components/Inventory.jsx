import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 9,
  });

  //const [ran, setRan] = useState(Math.floor(Math.random()*10));

  const handleChange = (item, value, change) => {
    if (value + change < 0) {
      return;
    } else if (item === "books") {
      setInv({ ...inv, books: value + change });
    } else if (item === "notebooks") {
      setInv({ ...inv, notebooks: value + change });
    } else if (item === "pen") {
      setInv({ ...inv, pen: value + change });
    } else if (item === "inkpens") {
      setInv({ ...inv, inkpens: value + change });
    }
  };
  // Create add and remove functions here that changes the
  // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          onClick={() => {
            handleChange("books", inv.books, 1);
          }}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => {
            handleChange("books", inv.books, -1);
          }}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          onClick={() => {
            handleChange("notebooks", inv.notebooks, 1);
          }}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => {
            handleChange("notebooks", inv.notebooks, -1);
          }}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          onClick={() => {
            handleChange("pens", inv.pens, 1);
          }}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => {
            handleChange("pens", inv.pens, -1);
          }}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          onClick={() => {
            handleChange("inkpens", inv.inkpens, 1);
          }}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => {
            handleChange("inkpens", inv.inkpens, -1);
          }}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};
