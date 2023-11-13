import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Exercises from "/pages/Exercises.jsx";
import Theory from "/pages/Theory.jsx";
import MainMenu from "/pages/MainMenu.jsx";
import Slide from '/pages/Slide.jsx'

function App() {

  return (
    <div>
        <Routes>
        <Route path="/" element={<MainMenu/>}/>
        <Route path="/Exercises" element={<Exercises/>}/>
        <Route path="/Theory" element={<Theory/>}>
            <Route path={`/Theory/:exerciseGroup/:slideIndex`} element={<Slide/>}/>      
        </Route>

        </Routes>
       
    </div>
  )
}

export default App
