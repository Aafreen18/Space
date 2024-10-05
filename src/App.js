import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './components/Landing.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Register from './components/Sign_In.jsx';
import Navbar from './components/Navbar.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Landing name="landing" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
