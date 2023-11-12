import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './MainMenu.css';
import "98.css";

export default function MainMenu() {

  const [activityGroup, setActivityGroup] = useState("");
  const navigate = useNavigate();
  

  function handleOnClick(event){
    event.preventDefault();
    setActivityGroup(event.target.id);
  }

  useEffect(() => { // no estic gens segura d'haver-ho fet bé, tinc molts problemes per gestionar la sincro de useState
    activityGroup && navigate(`/Theory/${activityGroup}Slide_1`, {state: activityGroup}); //he llegit sobre state en el useNavigate i envio l'estat així to try things
  }, [activityGroup])

  return (

    <div className="window" style={{width: "300px"}}>
      <div className="title-bar">
        <marquee className="title-bar-text">Judit's vintage music theory site ^^</marquee>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p>What do you want to learn today?</p>
      </div>

        <button id="Chords" activitygroup={activityGroup} onClick={handleOnClick} >Chords</button>
        <button id="Intervals" activitygroup={activityGroup} onClick={handleOnClick} >Intervals</button>
        <button id="Scales" activitygroup={activityGroup} onClick={handleOnClick} >Scales</button>

    </div>

  )
}
