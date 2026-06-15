import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/css/style.css'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
)
