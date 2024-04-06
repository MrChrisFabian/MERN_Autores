import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* //Usar navlink en vez de link para acceder a su active desde css? */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
