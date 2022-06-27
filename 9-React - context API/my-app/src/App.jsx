import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Cart } from './components/body/Card'
import { LangContext } from './contexts/Language'

function App() {
  const {handleLang} = useContext(LangContext);

  return (
    <>

    <button
      onClick={() => {
        handleLang();
      }}
    >Lang</button>

      <Navbar></Navbar>

      <Cart></Cart>
    </>
  )
}

export default App
