import './todoInput.css'
import { useState } from "react"

export const TodoInput = ({handleChange}) => {
    const [text, setText] = useState("");
    console.log(text)


    return (
        <div className="inputData">
            <input 
            onChange={(e) =>{
                setText(e.target.value)
            }}
            type="text" 
            placeholder="Enter Todo"
            />
            <button
             onClick={() =>{
                handleChange(text);
             }} 
            >+</button>
        </div>
        
    )
}