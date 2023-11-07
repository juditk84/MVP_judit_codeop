import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import Chords from "/pages/Chords.jsx";
import MainMenu from "/pages/MainMenu.jsx";


function App() {

  return (
    <div className="main_window">
        <Routes>
          <Route path="/Chords" element={<Chords/>}/>
          <Route path="/" element={<MainMenu/>}/>
        </Routes>
       
    </div>
  )
}

export default App
