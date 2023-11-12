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
    const [filteredExercisesQuery] = useState(new URLSearchParams(location.search).get('filteredExercises'))
    const [activityGroupQuery] = useState(new URLSearchParams(location.search).get('activityGroup'))                                                               

    const [audio, setAudio] = useState(new Audio());

    useEffect(() => {
      console.log(location.search)
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

  function handleSelectionButton(str) { // the whole thing can be refactored
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
        setProgressBarFill(progressBarFill - 10);
        setWrongOrRightPopup(null)

      }, 1500) // es mostra el missatge 1.5 segons y luego al lío
    }
  }

  function playSound(){
          audio.loop = false;
          audio.play();
  }

  // ojo amb això que és una absoluta meravella: 
  // canviem l'audio de l'exercici que es mostra en pantalla QUAN CANVIA exerciciCounter o/i exericis
  useEffect(() => {
    setAudio(new Audio(`../public/assets/sounds/${exercicis[exerciciCounter]?.fonamental}_${exercicis[exerciciCounter]?.especie}.mp3`))
  }, [exerciciCounter, exercicis])


  function ResultsComponent(){ //ho estic fent així per no haver de passar casi tot com a props
    
      return (
        <div className="">
          <p>{errors > encerts ? "nice try!" : "Good work!"}</p>
          <p>Here are your results:</p>
          <div className="">
            {exercicis.map(({fonamental, especie, completat}, i) => 
            <div className=" mb-4">
              <div className="card card-body">
                <h4>{completat ? "Right!" : "Wrong..."}</h4> Chord {i + 1}: {fonamental?.toUpperCase()} {especie}</div></div>)}
          </div>
        </div>
      )
    
  }

  return (

    <div className= "main_window">
      {exerciciCounter < 9 ?
        <div >
        <marquee><h3>THE CHORDS APP ITSELF</h3></marquee>
          
          <button className={wrongOrRightPopup ? "hidden" : "button-13"} onClick={playSound}>Listen!</button> <br /> <br />
          <div className="progressbar_container">
            <div className="progress_bar" style={{ 'width': `${progressBarFill}%` }}>{`${encerts}/10`}</div>
          </div> <br />
          
          <div className= "pentagram">
            
            <img className="pentagram_image" src={`../public/assets/images/chords/${exercicis[exerciciCounter]?.fonamental}_${exercicis[exerciciCounter]?.especie}.png`}></img> 

          </div>
          <div className={wrongOrRightPopup ? "hidden" : "buttonsArea"}>

            <h5>What kind of chord is it?</h5>
          <button className="button-13" onClick={() => handleSelectionButton("major")} disabled={filteredExercisesQuery.includes("major") ? false : true}>Major</button>
          <button className="button-13" onClick={() => handleSelectionButton("minor")} disabled={filteredExercisesQuery.includes("minor") ? false : true}>Minor</button>
          <button className="button-13" onClick={() => handleSelectionButton("dim")} disabled={filteredExercisesQuery.includes("dim") ? false : true}>Diminished</button>
          <button className="button-13" onClick={() => handleSelectionButton("Maj7")} disabled={filteredExercisesQuery.includes("Maj7") ? false : true}>Maj7</button>
          <button className="button-13" onClick={() => handleSelectionButton("m7")} disabled={filteredExercisesQuery.includes("m7") ? false : true}>m7</button>
          <button className="button-13" onClick={() => handleSelectionButton("7th")} disabled={filteredExercisesQuery.includes("7th") ? false : true}>7th</button>
          <button className="button-13" onClick={() => handleSelectionButton("m7b5")} disabled={filteredExercisesQuery.includes("m7b5") ? false : true}>m7b5</button>
          
          </div>
          <div style={{"textAlign": "center"}}><video autoPlay muted style={{"width": "50%", "height": "50%"}} src={wrongOrRightPopup ? `../public/assets/videos/${wrongOrRightPopup}.mp4` : ""}></video></div>
        </div>
        : <ResultsComponent/>}
      
    </div>
  )
}
