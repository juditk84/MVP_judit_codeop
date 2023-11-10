import React from 'react'
import { useState } from 'react';
import './ChordsTheory.css'
import { Link, Outlet, useNavigate } from "react-router-dom";





export default function ChordsTheory() {

    const [slideIndex, setSlideIndex] = useState(1)

    const [filteredChords, setFilteredChords] = useState([])

    function onSliderButtonClick(e){ // no sé com posar això junt amb 
        
        setSlideIndex(e.target.id === "previous" ? slideIndex - 1 : slideIndex + 1)
        console.log(slideIndex)
    }

    function handleFormSumbit(event){
      event.preventDefault();
      console.log(event.target[0].id)
      console.log(event.target[0].checked)

      let myArray = [];
      for(let i = 6; i >= 0; i--){
        if(event.target[i].checked){
          myArray.push(event.target[i].id) 
        }
        console.log(myArray)
      }

      setFilteredChords(myArray)
      console.log(filteredChords)
    }


  return (
    <div className="main_window">
        
        <h3>CHORDS FANSI ZÍORI</h3>
        
        <div>
        
        <Outlet/>

        </div>
            <div className="theory_slider">

            <Link to={`ChordsSlide_${slideIndex - 1}`}><button id="previous" onClick={onSliderButtonClick} disabled={slideIndex === 1 ? true : false}>prev.</button></Link>{slideIndex}/4<Link to={`ChordsSlide_${slideIndex + 1}`}><button onClick={onSliderButtonClick} disabled={slideIndex === 4 ? true : false}>next</button></Link> <br />
            
            </div>

        <br /><br />
        <h3>FILTERS:</h3>
        <form className="mb-2 row" onSubmit={handleFormSumbit}>
            
            <div className="col-sm"><input id="major" type="checkbox" /><label htmlFor="">Major</label></div>
            <div className="col-sm"><input id="minor" type="checkbox" /><label htmlFor="">Minor</label></div>
            <div className="col-sm"><input id="dim" type="checkbox" /><label htmlFor="">Dim</label></div>
            <div className="col-sm"><input id="Maj7" type="checkbox" /><label htmlFor="">Maj7</label></div>
            <div className="col-sm"><input id="7th" type="checkbox" /><label htmlFor="">7th</label></div>
            <div className="col-sm"><input id="m7" type="checkbox" /><label htmlFor="">m7</label></div>
            <div className="col-sm"><input id="m7b5" type="checkbox" /><label htmlFor="">m7b5</label></div>
            <br /><br />
            <button>submit test</button>
        </form>
        <Link to={{pathname: "/Chords", search: `?filteredChords=${filteredChords}`}}><button>start the test</button></Link> <br />
        {filteredChords}
        
       {/* <button>start the test</button> */}

        
    </div>
  )
}