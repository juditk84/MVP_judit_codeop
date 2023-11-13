import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "98.css";

export default function MainMenu() {

  const [activityGroup, setActivityGroup] = useState("");
  
  const navigate = useNavigate();
  
  function handleOnClick(event){
    event.preventDefault();
    setActivityGroup(event.target.id);
  }

  useEffect(() => { // no estic gens segura d'haver-ho fet bé, tinc molts problemes per gestionar la sincro de useState
    activityGroup && navigate({pathname: `/Theory/${activityGroup}/1`}); //he llegit sobre state en el useNavigate i envio l'estat així to try things
  }, [activityGroup])

  return (

    <div className="window" style={{width: "300px"}}>
      <div className="title-bar">
        <marquee className="title-bar-text">Judit's MODERN AND UP TO DATE music theory site ^^</marquee>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <marquee direction="right" scrollamount="12">🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶</marquee>
        <p>What do you want to learn today?</p>
        <marquee scrollamount="6">🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶</marquee>
      </div>

        <button id="Chords"onClick={handleOnClick} >Chords</button>
        <button id="Intervals" onClick={handleOnClick} >Intervals</button>
        <button id="Scales" onClick={handleOnClick} >Scales</button>

    </div>

  )
}
