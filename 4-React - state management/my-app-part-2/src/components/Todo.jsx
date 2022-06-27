import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
function Todo(){
    const [TodoList, setTodoList] = useState([])
    
    const getData =(todo) => {

        const playLoad = {
            title: todo,
            status: false,
            id: nanoid(5),
        };

        setTodoList([...TodoList, playLoad])
    };

    const handleStatus = (id) => {
        console.log("id", id);
        setTodoList(
            TodoList.map((e) => (e.id === id ? {...e, status: !e.status } : e))
        );
    };

    return (
     <div>
        <TodoInput getData={getData}></TodoInput>
        {TodoList.map((e) =>(
            <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
        ))}
     </div>
    );
}

export default Todo;