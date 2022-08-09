import React from 'react'
import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Amy_Portfolio/" element={<Home />} />
        <Route path="/Amy_Portfolio/About" element={<About />} />
        <Route path="/Amy_Portfolio/Project" element={<Project />} />
        <Route path="/Amy_Portfolio/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
