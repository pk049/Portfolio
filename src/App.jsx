import { useState } from 'react'
import './App.css'
import Home from './components/main'
import Nav from './components/nav'
import { Routes,Route } from 'react-router-dom'
import Skills from './components/skills'
import Projects from './components/projects'

function App() {

  return (
    <>
      <Nav/>
     
      <Routes>
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
