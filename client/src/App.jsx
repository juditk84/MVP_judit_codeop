import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Exercises from "/pages/Exercises.jsx";
import Theory from "/pages/Theory.jsx";
import MainMenu from "/pages/MainMenu.jsx";
import ChordsSlide_1 from '/pages/Theory/ChordsSlide_1.jsx';
import ChordsSlide_2 from '/pages/Theory/ChordsSlide_2.jsx';
import ChordsSlide_3 from '/pages/Theory/ChordsSlide_3.jsx';
import ChordsSlide_4 from '/pages/Theory/ChordsSlide_4.jsx';
import IntervalsSlide_1 from '/pages/Theory/IntervalsSlide_1.jsx';
import IntervalsSlide_2 from '/pages/Theory/IntervalsSlide_2.jsx';
import IntervalsSlide_3 from '/pages/Theory/IntervalsSlide_3.jsx';
import IntervalsSlide_4 from '/pages/Theory/IntervalsSlide_4.jsx';
import ScalesSlide_1 from '/pages/Theory/ScalesSlide_1.jsx';
import ScalesSlide_2 from '/pages/Theory/ScalesSlide_2.jsx';
import ScalesSlide_3 from '/pages/Theory/ScalesSlide_3.jsx';
import ScalesSlide_4 from '/pages/Theory/ScalesSlide_4.jsx';


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
          <Route path="/Theory/IntervalsSlide_1" element={<IntervalsSlide_1/>}/>
          <Route path="/Theory/IntervalsSlide_2" element={<IntervalsSlide_2/>}/>
          <Route path="/Theory/IntervalsSlide_3" element={<IntervalsSlide_3/>}/>
          <Route path="/Theory/IntervalsSlide_4" element={<IntervalsSlide_4/>}/>
          <Route path="/Theory/ScalesSlide_1" element={<ScalesSlide_1/>}/>
          <Route path="/Theory/ScalesSlide_2" element={<ScalesSlide_2/>}/>
          <Route path="/Theory/ScalesSlide_3" element={<ScalesSlide_3/>}/>
          <Route path="/Theory/ScalesSlide_4" element={<ScalesSlide_4/>}/>
        
        </Route>

        </Routes>
       
    </div>
  )
}

export default App
