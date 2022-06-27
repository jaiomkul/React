import { useEffect, useState } from "react"

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        getData();
      }, []);

      const getData = async () => {
        const data = await fetch("http://localhost:8080/posts")
              .then((d) =>
                d.json()
                );
          setTodos(data)
        }

    return ( 
    <div>
        <input
         onChange={(e) => setText(e.target.value)}
        type="text" placeholder="Enter TAodo" />
        <button onClick={() => {
            const payload = {
                title: text,
                status: false
            };
            fetch("http://localhost:8080/posts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(() => {
                getData();
            });
            // axios.post("http://localhost:8080/posts", payload)
        }}
           
        >Add</button>

        {todos.map((t) =>(
        <div>{t.title}</div>
        ))}
    </div>
    );
}
