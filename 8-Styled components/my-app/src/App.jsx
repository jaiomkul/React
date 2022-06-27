import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './components/Button '
import { Flex } from './components/flex'

function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
      <h1>Theme is {theme}</h1>

      <Button
         onClick={() => {
           alert("Click Me");
         }}
      children={"Click me"}></Button>

      <Button
       onClick={() =>{
         alert("Clicked Sign Up");
       }}
      >Sign Up</Button>

      <Button>Add Me</Button>
      <Flex>
        <div>One</div>
        <div>One</div>
        <div>One</div>
      </Flex>

      <div>
        <Button
          theme={theme}
        >Click Me</Button>

        <Button 
          onClick={() => {

            // if(theme == "dark"){
            //   setTheme("light")
            // }
            // else{
            //   setTheme("dark")
            // }

            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Change Theme
        </Button>
      </div>
    </div>
  )
}

export default App
