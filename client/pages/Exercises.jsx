// sorry, there's a few catalan words here and there...
//This is the page that renders the exercises and handles their logic.

import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Exercises() {

    const navigate = useNavigate();

    const [exercicis, setExercicis] = useState([])
    const [exerciciCounter, setExerciciCounter] = useState(0);
    const [encerts, setEncerts] = useState(0);
    const [errors, setErrors] = useState(0);
    const [progressBarFill, setProgressBarFill] = useState(100)
    const [wrongOrRightPopup, setWrongOrRightPopup] = useState(null)

    // Maybe there's a better way to grab the search params, but this is what some article suggested:
    const [filteredExercisesQuery] = useState(new URLSearchParams(location.search).get('filteredExercises'))
    const [activityGroupQuery] = useState(new URLSearchParams(location.search).get('activityGroup'))                                                               

    // Maybe there's a better way to add audio, but this is what some documentation suggested:
    const [audio, setAudio] = useState(new Audio());

    useEffect(() => {
        getExercicis();
    }, [])

  async function getExercicis() {

    try{

      const response = await fetch(`http://localhost:4000/exercicis/filtrats/${activityGroupQuery}/${filteredExercisesQuery}`)  
      const data = await response.json();
    
      console.log("exercicis filtrats: ", data)
      setExercicis(data);

    }catch(err){console.log("an error :-)")}
    
  }

  function handleSelectionButton(str) { 
    
    // the whole thing can be refactored. For now what it does is 
    // add +1 to "encerts" if the answer is right or a +1 to "errors" if the answer is wrong.
    
    // (in the timeout) it reshapes the array of exercicis to include wether the exercise you've done is
    // answered correctly or not (by default, all exercises come from the backend as "completat = 0, but if you
    // get it right in turns to 1 and that translates later to being correctly answered.")

    // (also in the timeout) adds one to the "exerciciCounter" to move to the next exercise and displays the "wrongOrRightPopup"
    // thing that displays a crappy video for 1.5 seconds.

    // it can be nicely refactored, but at this point I'm just seeing code and html marquees when I go to sleep and I close my eyes.

    if(exercicis[exerciciCounter]?.especie === str){
      console.log("resposta correcta");
      setEncerts(encerts + 1);
      
      setWrongOrRightPopup("right")

      setTimeout(() => {
        
        setExercicis(exercicis.map((exercici, i) => {
                                    if(i === exerciciCounter){
                                      return {...exercici, completat: 1}
                                    } else {
                                      return exercici
                                    }}))

        setExerciciCounter(exerciciCounter + 1);        
        setWrongOrRightPopup(null)

      }, 1500) // es mostra el missatge 1.5 segons y luego al lío
      
    }
    else{
      console.log("resposta incorrecta")
      setErrors(errors + 1);
      
      setWrongOrRightPopup("wrong")

      setTimeout(() => {
        
        setExerciciCounter(exerciciCounter + 1);
        setProgressBarFill(progressBarFill - 20);
        setWrongOrRightPopup(null)

      }, 1500) // es mostra el missatge 1.5 segons y luego al lío
    }
  }

  //this just plays the sound when the Listen button is clicked.
  function playSound(){
          audio.loop = false;
          audio.play();
  }

  // this bring me joy: the exercise piano sound is changed on the condition that exerciciCounter and/or exercicis have changed.
  useEffect(() => {
    exercicis.length > 0 && (exerciciCounter < 5 && setAudio(new Audio(`../public/assets/sounds/${activityGroupQuery}/${exercicis[exerciciCounter]?.fonamental}_${exercicis[exerciciCounter]?.especie}.mp3`)))
  }, [exerciciCounter, exercicis])

  // this resets the game with the filters you set in the /Theory page.
  function handleTryAgain(){
    setEncerts(0)
    setErrors(0)
    setProgressBarFill(100)
    setExerciciCounter(0)
    getExercicis();
  }

  // this tamkes you back to the Main Menu.
  function handleMainMenuNav(){
    navigate({pathname: "../"})
  }

  //then this... it could be a separate component but for some reason I did it like this and now it's
  //almost 17h and excuses excuses excuses xD
  function ResultsComponent(){ 
    
      return (

        
        <div className="window">

          <div className="title-bar">
            <marquee className="title-bar-text">{errors > encerts ? "🥴🥴🥴 nice try! 🥴🥴🥴" : "🥳🥳🥳 Good work! 🥳🥳🥳"}</marquee>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          
          <ul className="tree-view">
            <li key="1"></li>
            <li key="2">Here's your results:</li>
            <li key="3">
              
              {/* the app maps through the exercicis thing and returns a list with "Right" or "Wrong" 
                  depending on the "completat" parameter. 
                  I would love to give it a better format... instead it shows just
                  the option you should have answered. Maybe doing it so it also displays in red
                  the option you entered if it's wrong and green if it's right would be nice. */}

              <ul>
                {exercicis.map(({fonamental, especie, completat}, i) => 
                  <li key={i}>
                    {completat ? "Right!" : "Wrong..."}
                  <details open>
                  <summary>Details</summary>
                    <ul>
                      <li key={i}>Chord {i + 1}: {fonamental?.toUpperCase()} {especie}</li>
                    </ul>
                  </details >
                  </li>)}
              </ul>
            
            </li>
          </ul>

        <br /><br />
        <button onClick={handleTryAgain}>Try Again</button> <button onClick={handleMainMenuNav}>Main Menu</button>
        <br /><br />

        </div>
      )
    
  }

  return (

    <div className= "window"> 
    
      {exerciciCounter < 5 ? //the app uses 5 exercises. The main window will show instead of the Results component while we're in the 5 exercises
        <div >

          <div className="title-bar"> {/* the win98 title bar thing */}
            <marquee className="title-bar-text">{activityGroupQuery} exercises</marquee>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
          </div>
          </div>
          
          <br /><button className={wrongOrRightPopup ? "hidden" : ""} onClick={playSound}>Listen!</button><br /> <br />
          <div className="progressbar_container">
            <div className="progress_bar" style={{ 'width': `${progressBarFill}%` }}>{`${encerts}/5`}</div>
          </div> <br />
          
          {exercicis.length > 0 &&
          
          <div className= "pentagram">
            
            <img className="pentagram_image" src={`../public/assets/images/${activityGroupQuery}/${exercicis[exerciciCounter]?.fonamental}_${exercicis[exerciciCounter]?.especie}.png`}></img> 
            
          </div>
          
          }
          {/* I really don't like this, but that's what I came up with.
              Depending on the activityGroup we are in, it will display a set of button or another.
              Then, each button will be disabled/enabled depending on the checkboxes of the /Theory page
              that are passed to the Exercises page in the shape of a URL parameter.*/}

          <div className={wrongOrRightPopup ? "hidden" : "buttonsArea"}>

            <div className={activityGroupQuery === "Chords" ? "buttonsArea" : "hidden"}>

              <br /><p>What kind of chord is it?</p>
            <button className="" onClick={() => handleSelectionButton("major")} disabled={filteredExercisesQuery.includes("major") ? false : true}>Major</button>
            <button className="" onClick={() => handleSelectionButton("minor")} disabled={filteredExercisesQuery.includes("minor") ? false : true}>Minor</button>
            <button className="" onClick={() => handleSelectionButton("dim")} disabled={filteredExercisesQuery.includes("dim") ? false : true}>Diminished</button>
            <button className="" onClick={() => handleSelectionButton("Maj7")} disabled={filteredExercisesQuery.includes("Maj7") ? false : true}>Maj7</button>
            <button className="" onClick={() => handleSelectionButton("m7")} disabled={filteredExercisesQuery.includes("m7") ? false : true}>m7</button>
            <button className="" onClick={() => handleSelectionButton("7th")} disabled={filteredExercisesQuery.includes("7th") ? false : true}>7th</button>
            <button className="" onClick={() => handleSelectionButton("m7b5")} disabled={filteredExercisesQuery.includes("m7b5") ? false : true}>m7b5</button>
            
            </div>

            <div className={activityGroupQuery === "Intervals" ? "buttonsArea" : "hidden"}>

             <br /><p>What kind of interval is it?</p>
            <button className="" onClick={() => handleSelectionButton("maj2")} disabled={filteredExercisesQuery.includes("maj2") ? false : true}>Major 2nd</button>
            <button className="" onClick={() => handleSelectionButton("min2")} disabled={filteredExercisesQuery.includes("min2") ? false : true}>Minor 2nd</button>
            <button className="" onClick={() => handleSelectionButton("maj3")} disabled={filteredExercisesQuery.includes("maj3") ? false : true}>Major 3rd</button>
            <button className="" onClick={() => handleSelectionButton("min3")} disabled={filteredExercisesQuery.includes("min3") ? false : true}>Minor 3rd</button>
            <button className="" onClick={() => handleSelectionButton("dim4")} disabled={filteredExercisesQuery.includes("dim4") ? false : true}>diminished 4th</button>
            <button className="" onClick={() => handleSelectionButton("perf4")} disabled={filteredExercisesQuery.includes("perf4") ? false : true}>perfect 4th</button>
            <button className="" onClick={() => handleSelectionButton("aug4")} disabled={filteredExercisesQuery.includes("aug4") ? false : true}>Augmented 4th</button>
            <br />
            <button className="" onClick={() => handleSelectionButton("perf5")} disabled={filteredExercisesQuery.includes("perf5") ? false : true}>Perfect 5th</button>
            <button className="" onClick={() => handleSelectionButton("aug5")} disabled={filteredExercisesQuery.includes("aug5") ? false : true}>Augmented 5th</button>
            <button className="" onClick={() => handleSelectionButton("maj6")} disabled={filteredExercisesQuery.includes("maj6") ? false : true}>Major 6th</button>
            <button className="" onClick={() => handleSelectionButton("min6")} disabled={filteredExercisesQuery.includes("min6") ? false : true}>Minor 6th</button>
            <button className="" onClick={() => handleSelectionButton("maj7")} disabled={filteredExercisesQuery.includes("maj7") ? false : true}>Major 7th</button>
            <button className="" onClick={() => handleSelectionButton("min7")} disabled={filteredExercisesQuery.includes("min7") ? false : true}>Minor 7th</button>
            <button className="" onClick={() => handleSelectionButton("octave")} disabled={filteredExercisesQuery.includes("octave") ? false : true}>Octave</button>
          
            </div>

            <div className={activityGroupQuery === "Scales" ? "buttonsArea" : "hidden"}>

              <br /><p>What kind of scale is it?</p>
            <button className="" onClick={() => handleSelectionButton("ionian")} disabled={filteredExercisesQuery.includes("ionian") ? false : true}>Ionian</button>
            <button className="" onClick={() => handleSelectionButton("dorian")} disabled={filteredExercisesQuery.includes("dorian") ? false : true}>Dorian</button>
            <button className="" onClick={() => handleSelectionButton("phrygian")} disabled={filteredExercisesQuery.includes("phrygian") ? false : true}>Phrygian</button>
            <button className="" onClick={() => handleSelectionButton("lydian")} disabled={filteredExercisesQuery.includes("lydian") ? false : true}>Lydian</button>
            <button className="" onClick={() => handleSelectionButton("mixolydian")} disabled={filteredExercisesQuery.includes("mixolydian") ? false : true}>Mixolydian</button>
            <button className="" onClick={() => handleSelectionButton("aeolian")} disabled={filteredExercisesQuery.includes("aeolian") ? false : true}>Aeolian</button>
            <button className="" onClick={() => handleSelectionButton("locrian")} disabled={filteredExercisesQuery.includes("locrian") ? false : true}>Locrian</button>
            
            </div>

          </div>
          

          <div style={{"textAlign": "center"}}><video autoPlay muted style={{"width": "50%", "height": "50%"}} src={wrongOrRightPopup ? `../public/assets/videos/${wrongOrRightPopup}.mp4` : ""}></video></div>
        </div>
        : <ResultsComponent/>} {/* If we finished the exercises, the Results Component is displayed instead of all the rest. */}
      
    </div>
  )
}