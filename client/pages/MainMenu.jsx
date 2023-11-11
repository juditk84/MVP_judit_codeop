import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './MainMenu.css';

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
    <div className="menu_container">
        <div className="title_box"><h3>Main Menu</h3></div>
        
          <div className="row" ></div>
            
            <button id="Chords" activitygroup={activityGroup} onClick={handleOnClick} className="button-74">Chords</button><br />
            <button id="Intervals" activitygroup={activityGroup} onClick={handleOnClick} className="button-74">Intervals</button><br />
            <button id="Scales" activitygroup={activityGroup} onClick={handleOnClick} className="button-74">Scales</button><br />

        <p>it's a trap for now, they all take to the same crappy app jsjsjsj</p>

    </div>

  )
}
