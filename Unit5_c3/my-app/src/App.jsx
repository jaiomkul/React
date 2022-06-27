import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </div>
  )
}

export default App
