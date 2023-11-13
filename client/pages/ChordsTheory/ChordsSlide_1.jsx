import React from 'react'
import { Link } from 'react-router-dom'

export default function ChordsSlide_1() {
  return (
    
    <div className="pp-3 mb-2 bg-light text-dark rounded border border-dark"> 
    <p>
            ok, so you've learned about intervals... wait, haven't you? <br />
            I think {<Link to="/Chords">you should</Link>} before going for chords! <br />
            Because guess what, chords are like stacking intervals one "on top" of the other. <br />
    </p>
             
    </div>
  )
}