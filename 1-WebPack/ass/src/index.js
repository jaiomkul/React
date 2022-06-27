import { sum, mul } from "./calc";
import "./index.css"

import imgs from "./webp.png"

console.log(sum(10,5,9))

console.log(mul(5,5,9))



const root = document.getElementById("root");
const img = document.createElement("img");
img.src = imgs;

const h1 = document.createElement("h1");
h1.innerHTML = "Kya bolte public ravash na";
h1.setAttribute("id","redText")
root.append(h1,img);