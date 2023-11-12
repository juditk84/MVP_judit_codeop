import React from 'react'
import { useState } from 'react';
import './Theory.css'
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Theory() {

    const navigate = useNavigate();
    const location = useLocation(); //trying ways to pass state between pages
    
    const [activityGroup, setActivityGroup] = useState(location.state) //storing what I sent from MainMenu via useNavigate state
    const [slideIndex, setSlideIndex] = useState(1) //to move from slide to slide
    const [filteredExercises, setFilteredExercises] = useState({})

    function onSliderButtonClick(e){ 
        
        setSlideIndex(e.target.id === "previous" ? slideIndex - 1 : slideIndex + 1)

    }

    function handleFormSubmit(event){
      event.preventDefault();

      let exerciseSetterArray = [];
      for(let i = 6; i >= 0; i--){
        if(event.target[i].checked){
          exerciseSetterArray.push(event.target[i].id)
        }
      }

      setFilteredExercises({filteredExercisesArray: exerciseSetterArray})
      
      console.log(exerciseSetterArray)
      setFilteredExercises(exerciseSetterArray)
      navigate({pathname: "/Exercises", search: `?filteredExercises=${exerciseSetterArray}&activityGroup=${activityGroup}`})
    }

  return (
    <div className="main_window">
        
        <h3>{activityGroup.toUpperCase()} THEORY PAGE</h3>
        
        <div>
        
        <Outlet/>

        </div>
            <div className="theory_slider">

            <Link to={`${activityGroup}Slide_${slideIndex - 1}`}><button id="previous" onClick={onSliderButtonClick} disabled={slideIndex === 1 ? true : false}>
            prev.</button>
            </Link>{slideIndex}/4<Link to={`${activityGroup}Slide_${slideIndex + 1}`}>
            <button onClick={onSliderButtonClick} disabled={slideIndex === 4 ? true : false}>next</button></Link> <br />
          
            </div>

        <br /><br />
        <h3>FILTERS:</h3>
        <form className="mb-2 row" onSubmit={() => handleFormSubmit(event)}>
        
            <div className="col-sm"><input id="major" type="checkbox" /><label htmlFor="">Major</label></div>
            <div className="col-sm"><input id="minor" type="checkbox" /><label htmlFor="">Minor</label></div>
            <div className="col-sm"><input id="dim" type="checkbox" /><label htmlFor="">Dim</label></div>
            <div className="col-sm"><input id="Maj7" type="checkbox" /><label htmlFor="">Maj7</label></div>
            <div className="col-sm"><input id="7th" type="checkbox" /><label htmlFor="">7th</label></div>
            <div className="col-sm"><input id="m7" type="checkbox" /><label htmlFor="">m7</label></div>
            <div className="col-sm"><input id="m7b5" type="checkbox" /><label htmlFor="">m7b5</label></div>
            <br /><br />
            <button>Start the test!</button>
        </form>    
    </div>
  )
}