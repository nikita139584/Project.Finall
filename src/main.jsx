import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
//BrowserRouter нужен для связыванин кода и адреса браузера без него не будет работать Link, Route, Routes и useNavigate
    <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
    </BrowserRouter>
)
