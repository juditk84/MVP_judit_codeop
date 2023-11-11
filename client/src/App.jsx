import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import Exercises from "/pages/Exercises.jsx";
import Theory from "/pages/Theory.jsx";
import Chords from "/pages/Chords.jsx";
import Results from "/pages/Results.jsx";
import MainMenu from "/pages/MainMenu.jsx";
import ChordsTheory from '/pages/ChordsTheory.jsx';
import ChordsSlide_1 from '/pages/ChordsTheory/ChordsSlide_1.jsx';
import ChordsSlide_2 from '/pages/ChordsTheory/ChordsSlide_2.jsx';
import ChordsSlide_3 from '/pages/ChordsTheory/ChordsSlide_3.jsx';
import ChordsSlide_4 from '/pages/ChordsTheory/ChordsSlide_4.jsx';


function App() {

  return (
    <div>
        <Routes>
        <Route path="/" element={<MainMenu/>}/>
        <Route path="/Exercises" element={<Exercises/>}/>
        <Route path="/Theory" element={<Theory/>}>

          <Route path="/Theory/ChordsSlide_1" element={<ChordsSlide_1/>}/>
          <Route path="/Theory/ChordsSlide_2" element={<ChordsSlide_2/>}/>
          <Route path="/Theory/ChordsSlide_3" element={<ChordsSlide_3/>}/>
          <Route path="/Theory/ChordsSlide_4" element={<ChordsSlide_4/>}/>
        
        </Route>
        <Route path="/Chords" element={<Chords/>}/>
        <Route path="/Results" element={<Results/>}/>
        <Route path="/ChordsTheory" element={<ChordsTheory/>}>
          {/* <Route path="/ChordsTheory/ChordsSlide_1" element={<ChordsSlide_1/>}/>
          <Route path="/ChordsTheory/ChordsSlide_2" element={<ChordsSlide_2/>}/>
          <Route path="/ChordsTheory/ChordsSlide_3" element={<ChordsSlide_3/>}/>
          <Route path="/ChordsTheory/ChordsSlide_4" element={<ChordsSlide_4/>}/> */}
        </Route>
        </Routes>
       
    </div>
  )
}

export default App
