import logo from './logo.svg';
import './App.css';

function App() {
  const food = "Pizza";
  const age = 12;
  const skills = ["mern", "node", "dsa", "design", "animation"]
  return (
    // <div className="App">
    //   <button>Test</button>
    //   <input/>
    //   <h1>Hello React</h1>
    //   <img src='' alt='missing'/>
    // </div>

  <div className='App'>
      <div>My fav food {food}</div>
    <div className='App'>Your {age >18 ? "Elegible": "Not Elegible"} for licence</div>
    <div>
      Your Skills:
      {/* <ul>
        {skills.map((e) =>{
          return <li>{e}</li>
        })}
      </ul> */}
      {skills.map((e) =>{
          return <Skill skill={e}></Skill>
        })}
    </div>
  </div>
  );
}

// Component

function Skill(props) {
  return <p>Skill:{props.skill}</p>
}

export default App;
