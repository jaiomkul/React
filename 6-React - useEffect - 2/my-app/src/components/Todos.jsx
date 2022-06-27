import { useEffect, useState } from "react"

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        console.log("Mounted Todos")
        getData();

        return function cleanUp(){
            //after component is unmounted!
            console.log("Todos is Unmounted")
        }

      }, [page]);

      const getData = async () => {
        const data = await fetch(`http://localhost:8080/posts?_page=${page}&_limit=3`)
              .then((d) =>
                d.json()
                );
          setTodos(data);
          setLoading(false);
        }

    return loading ?(
        "Loading...."
    ):( 
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

        <button 
          onClick={() => {
              setPage(page-1)
          }}
        >Prev</button>
        <button 
          onClick={() => {
            setPage(page+1)
        }}
        >Next</button>
    </div>
    );
}