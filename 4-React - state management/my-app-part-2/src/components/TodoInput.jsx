import { useState } from "react"

export const TodoInput = ({getData}) => {
const [text, setText] = useState("");
console.log(text)
    return (
        <div>
            <input 
            onChange={(e) =>{
                setText(e.target.value)  
            }}
            type="text" 
            placeholder="Enter Todo" />
            <button 
              onClick={() =>{
                  getData(text);
              }}
            >Add Data</button>
            <h1>{text}</h1>
        </div>
    );
}