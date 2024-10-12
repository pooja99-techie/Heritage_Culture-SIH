import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import SignIn from './pages/SignIn'
import NavBar from './components/header/NavBar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
