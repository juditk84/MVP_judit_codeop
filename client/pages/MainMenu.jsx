import React from 'react';
import { Link } from "react-router-dom";
import './MainMenu.css';

export default function MainMenu() {
  return (
    <div className="menu_container">
        <div className="title_box"><h3>Main Menu</h3></div>
        
          <div className="row" ></div>
            
            <Link to="/ChordsTheory/ChordsSlide_1"><button className="button-74">Chords</button></Link> <br />
            <Link to="/Chords"><button className="button-74">Intervals</button></Link> <br />
            <Link to="/Chords"><button className="button-74">Scales</button></Link> <br />

        <p>it's a trap for now, they all take to the same crappy app jsjsjsj</p>
        
    </div>

  )
}
