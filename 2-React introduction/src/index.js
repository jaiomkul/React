import { sum, mul } from "./calc";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

console.log(sum(9, 8, 7));
console.log(mul(9, 8, 7));

// const root = document.getElementById("root");

// const h1 = document.createElement("h1");
// h1.innerHTML = "Kya bolte public ravash na";
// h1.setAttribute("id","redText")
// root.append(h1);


// const h1 = React.createElement("h1", {}, "Hello React Meta!");

// const div = React.createElement("div", {}, "Hello Div");

// const img = React.createElement(
//     "img", 
//     {src: "https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png",
// });

// const td = React.createElement("td", {}, "Data","Data","Data")
// const th = React.createElement("th", {}, "Main", "Main1","Main2")

// const tr = React.createElement("tr", {}, th)
// const tr1 = React.createElement("tr", {},td)

// const table = React.createElement("table", {}, tr,tr1,tr1,tr1)

// const toShow = true;
// const p = React.createElement(
//     "p", 
//     { className: "redText", id: "redText"}, 
//     h1,
//     h1,
//     h1,
//     div,
//     table,
//     toShow ? img: null
//     );

//const root = document.getElementById("root");
// ReactDOM.render(
//     p,
// //    "Hello REact", //what
//    document.getElementById("root") //where
// );


ReactDOM.render(
    <div>
        <h1>Hello Babel</h1>
        <img 
        src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
        width= "300px"
        height="300px"
        />
        <table>
        <tr>
            <th>Data</th>
            <th>Name</th>
            <th>Last Name</th>
        </tr>
        <tr>
            <td>Data</td>
            <td>Name</td>
            <td>Last Name</td>
        </tr>
        <tr>
            <td>Data</td>
            <td>Name</td>
            <td>Last Name</td>
        </tr>
        <tr>
            <td>Data</td>
            <td>Name</td>
            <td>Last Name</td>
        </tr>
    </table>
    </div>, //what
   document.getElementById("root") //where
);