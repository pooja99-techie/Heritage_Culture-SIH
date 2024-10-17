import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/header/NavBar';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />  
      <Routes>
          {/* Define each route directly under Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
