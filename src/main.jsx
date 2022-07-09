import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Detail from './pages/detail'
import Home from './pages/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:blogId' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
