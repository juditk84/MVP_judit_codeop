// This is the main menu of the app. Not much to say, it's just 3 buttons to either learn Chords, Scales or Intervals. 
// Gotta tell you that I absolutely love the dedication of the guy that did the Windows98 css library...
// It's super well documented and easy to implement; if you need to make a trip back in time some day, go to his website: https://jdan.github.io/98.css/ 

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "98.css"; //make sure you NPM install'ed it!

export default function MainMenu() {

  const [activityGroup, setActivityGroup] = useState("");
  
  const navigate = useNavigate();
  
  function handleOnClick(event){
    event.preventDefault();
    setActivityGroup(event.target.id);
  }

  useEffect(() => { // not sure i'm doing this right, good chance to refactor this hahah
    activityGroup && navigate({pathname: `/Theory/${activityGroup}/1`}); 
  }, [activityGroup])

  return (
    
    <div className="window" style={{width: "300px"}}> {/* You'll find lots of returns with this structure. It's how the Windows98 window and titlebar thing is built. */}
      <div className="title-bar">
        <marquee className="title-bar-text">Judit's MODERN AND UP TO DATE music theory site ^^</marquee>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <marquee direction="right" scrollamount="12">🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶</marquee> {/* "in this bootcamp you'll learn how to make MODERN WEBSITES!" (proceeds to add marquees all over her app) */}
        <p>What do you want to learn today?</p>
        <marquee scrollamount="6">🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶</marquee>
      </div>

        <button id="Intervals" onClick={handleOnClick} >Intervals</button>
        <button id="Chords"onClick={handleOnClick} >Chords</button>
        <button id="Scales" onClick={handleOnClick} >Scales</button>

    </div>

  )
}
