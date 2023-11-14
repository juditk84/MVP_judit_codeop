import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export default function Theory() {

    const navigate = useNavigate();
    
    const [numOfChoices, setNumOfChoices] = useState();
    const {slideIndex, activityGroup} = useParams()
    const [filteredExercises, setFilteredExercises] = useState(); // couldn't get filteredExercises to sync right, so I'm using the exerciseSetterArray instead, wich I know is not good practice...

    useEffect(() => {
      
      //I set the number of choices because chords and scales have 7 choices, but intervals has 14.
      activityGroup === "Intervals" ? setNumOfChoices(14) : setNumOfChoices(7)

    }, [])

    function onSliderButtonClick(e){ 
      
      //the handling of the PREV. and NEXT buttons for the slides. if the event.target.id of the button is "previous",
      //it takes you to the current slide - 1. Otherwise, it takes you to current slide + 1.
      navigate({pathname: `./${activityGroup}/${e.target.id === "previous" ? +slideIndex - 1 : +slideIndex + 1}`})

    }

    function handleFormSubmit(event){
      event.preventDefault();

      //here i'm cheating... not using state but a standard js array here.
      let exerciseSetterArray = [];
      for(let i = numOfChoices; i >= 0; i--){
        if(event.target[i].checked){
          exerciseSetterArray.push(event.target[i].id)
        }
      }

      setFilteredExercises(exerciseSetterArray) //Judit cheats... hahah
      navigate({pathname: "/Exercises", search: `?filteredExercises=${exerciseSetterArray}&activityGroup=${activityGroup}`})
    }


  return (
    
    <div className="window" >
        
        <div className="title-bar">
        <marquee className="title-bar-text">{activityGroup?.toUpperCase()} THEORY PAGE</marquee>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
        
        <div className="slides_window"><Outlet /></div> {/* the slides page shows inside of this. */}
        
          {/* clicking on PREV. / NEXT buttons takes you to a different slide, but the prev. button is disabled if you're in slide 1
              and the next button is disabled if you're on the fourth. */}
          <div className="theory_slider">
            <button id="previous" onClick={onSliderButtonClick} disabled={+slideIndex === 1}>prev.</button>
            {slideIndex}/4
            <button id="next" onClick={onSliderButtonClick} disabled={+slideIndex === 4}>next</button>
          </div>

        <br /><br />
        <p style={{textAlign: "center"}}>FILTERS:</p>
        <form onSubmit={() => handleFormSubmit(event)}>

        {/* would love to refactor the following part, but oh my time flies... 
            Right now it displays a different set of buttons depending on the activityGroup variable that comes from the URL.
            Not perfect but hey it works...! 
            
            So, my logic is that each button has a different ID ilustrating what the exercise that the button toggles.
            once you selected the exercises you want to do and you click "Start the test", wich is actually a button
            that submits the form with what checkboxes have been checked passed in the event. 
            The handleFormDSubmit function reads which ones are toggled and passes them to the /Exercises page in the form
            of URL search params.*/}

        {activityGroup === "Chords" && 
          <div className="mb-2 row">
            <div className="col-sm"><input id="major" type="checkbox"/><label htmlFor="major">Major</label></div>
            <div className="col-sm"><input id="minor" type="checkbox" /><label htmlFor="minor">Minor</label></div>
            <div className="col-sm"><input id="dim" type="checkbox" /><label htmlFor="dim">Dim</label></div>
            <div className="col-sm"><input id="Maj7" type="checkbox" /><label htmlFor="Maj7">Maj7</label></div>
            <div className="col-sm"><input id="7th" type="checkbox" /><label htmlFor="7th">7th</label></div>
            <div className="col-sm"><input id="m7" type="checkbox" /><label htmlFor="m7">m7</label></div>
            <div className="col-sm"><input id="m7b5" type="checkbox" /><label htmlFor="m7b5">m7b5</label></div>
            <br /><br />
          </div>
        }

        {activityGroup === "Intervals" &&
        <div>
          <div className="mb-2 row">
            <div className="col-sm"><input id="maj2" type="checkbox" /><label htmlFor="maj2">Major 2nd</label></div>
            <div className="col-sm"><input id="min2" type="checkbox" /><label htmlFor="min2">Minor 2nd</label></div>
            <div className="col-sm"><input id="maj3" type="checkbox" /><label htmlFor="maj3">Major 3rd</label></div>
            <div className="col-sm"><input id="min3" type="checkbox" /><label htmlFor="min3">Minor 3rd</label></div>
            <div className="col-sm"><input id="dim4" type="checkbox" /><label htmlFor="dim4">Diminished 4th</label></div>
            <div className="col-sm"><input id="perf4" type="checkbox" /><label htmlFor="perf4">Perfect 4th</label></div>
            <div className="col-sm"><input id="aug4" type="checkbox" /><label htmlFor="aug4">Augmented 4th</label></div>
          </div>
          <div className="mb-2 row">
            <div className="col-sm"><input id="perf5" type="checkbox" /><label htmlFor="perf5">Perfect 5th</label></div>
            <div className="col-sm"><input id="aug5" type="checkbox" /><label htmlFor="aug5">Augmented 5th</label></div>
            <div className="col-sm"><input id="maj6" type="checkbox" /><label htmlFor="maj6">Major 6th</label></div>
            <div className="col-sm"><input id="min6" type="checkbox" /><label htmlFor="min6">Minor 6th</label></div>
            <div className="col-sm"><input id="maj7" type="checkbox" /><label htmlFor="maj7">Major 7th</label></div>
            <div className="col-sm"><input id="min7" type="checkbox" /><label htmlFor="min7">Minor 7th</label></div>
            <div className="col-sm"><input id="octave" type="checkbox" /><label htmlFor="octave">Octave</label></div>
          </div>
            <br /><br />
        </div>
      
        }
        
        {activityGroup === "Scales" &&
          <div className="mb-2 row">
            <div className="col-sm"><input id="ionian" type="checkbox" /><label htmlFor="ionian">Ionian</label></div>
            <div className="col-sm"><input id="dorian" type="checkbox" /><label htmlFor="dorian">Dorian</label></div>
            <div className="col-sm"><input id="phrygian" type="checkbox" /><label htmlFor="phrygian">Phrygian</label></div>
            <div className="col-sm"><input id="lydian" type="checkbox" /><label htmlFor="lydian">Lydian</label></div>
            <div className="col-sm"><input id="mixolydian" type="checkbox" /><label htmlFor="mixolydian">Mixolydian</label></div>
            <div className="col-sm"><input id="aeolian" type="checkbox" /><label htmlFor="aeolian">Aeolian</label></div>
            <div className="col-sm"><input id="locrian" type="checkbox" /><label htmlFor="locrian">Locrian</label></div>
            <br /><br />
          </div>
        }

          

            <div className="start_button"><button>Start the test!</button></div>
        </form>    
    </div>
  )
}