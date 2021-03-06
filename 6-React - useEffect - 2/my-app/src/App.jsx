import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Hello } from './components/Hello'
import { Todos } from './components/Todos';
import { Counter } from './components/counter';

function App() {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [posts, setPosts] = useState([]);

  console.log("Before")

  // effects are synchronous(one after other )
  useEffect(() =>{
    console.log("Inside effect 1")
  },[show]) //change only when age age(dependecy) call

  useEffect(() =>{
    console.log("Inside effect 2")
  },[show]) // not giviing array? every single time.

  console.log("After")

useEffect(() => {
  // fetch("http://localhost:8080/posts")
  //     .then((d) => d.json())
  //     .then((data) =>{
  //       setPosts(data);
  //     });
  async function getData(){
  const data = await fetch("http://localhost:8080/posts")
        .then((d) =>
          d.json()
          );
    setPosts(data)
  }
  getData();
}, []);

  return (
    <div className="App">
      {/* {show ? <Hello></Hello> : null}
      <button 
        onClick={() => {
          setShow(!show)
        }}
      >
          Toggle component
        </button>
        <div className='App'>
          {posts.map((post) =>(
          <div>{post.title}</div>
          ))}
          </div> */}

          {show1 ? <Todos></Todos> : null}

          <button 
            onClick={() => {
              setShow1(!show1);
            }}
          >{show1 ? "Hide" : "Show"} Todos</button>

          <Counter></Counter>
    </div>
  );
}

export default App
