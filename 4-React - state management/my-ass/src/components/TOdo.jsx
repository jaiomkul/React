import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem";

export const Todo = () => {
    const [todoList, setTodoList] = useState(["Learn React","Learn Lists", "Learn States"]);

    const handleChange = (todo) => {

        const payload = {
            title: todo,
            status: false
        }

        setTodoList([...todoList, todo])
    }
    return (
        <div>
                {todoList.map((e) => (
                    <TodoItem todo={e}></TodoItem>
                ))}
            <TodoInput handleChange={handleChange}></TodoInput>
        </div>
    )
}