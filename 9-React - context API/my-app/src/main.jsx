import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CartContextProvider} from "./contexts/CartContext"
import { LangContextProvider } from './contexts/Language'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LangContextProvider>
  </React.StrictMode>
)
