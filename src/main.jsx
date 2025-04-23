import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Home.jsx'
import Media from './Media.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/media' element={<Media />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
