import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import Chat from './components/Chat'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path = '/litgptchat' element = {<Chat />} />
      </Routes>
    </Router>
  )
}

export default App
