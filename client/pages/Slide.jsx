import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Markdown from 'react-markdown';

export default function Slide() {

    const location = useLocation();
  
    const [slideContent, setSlideContent] = useState();

    const {slideIndex, activityGroup} = useParams()

    const markdown = "**INTERVALS!!**  \n ok, Intervals are **important.**  \n They are the **building blocks of chords**, so if you're able to identify intervals it will be easier for you to identify chords.  \nAn interval is the distance between 2 notes. You take a note and the distance between it and another note is an interval."
    const markdown2 = "If you take a note (we'll call it **root**) and another one, the distance in tones and semitones will determine the type of interval. For the purpose of this activity we'll only use **melodic ascending** intervals (a note and another one higher in pitch played separately), but they can be also **melodic descending** (a note and another one lower in pitch played separately) or **harmonic** (two notes played at the same time).  \nThe following slide contains a table with the most typical intervals."
    const markdown3 = "- **Minor 2nd:** 1 semitone  \n- **Major 2nd:** 1 tone  \n- **Minor 3rd:** 1 tone 1 semitone  \n- **Major 3rd:** 2 tones  \n- **Diminished 4th:** 2 tones  \n- **Perfect 4th:** 2 tones 1semitone  \n- **Augmented 4th:** 3 tones  \n- **Diminished 5th:** 3 tones  \n- **Perfect 5th:** 3 tones 1 semitone  \n- **Augmented 5th:** 4 tones  \n- **Minor 6th:** 3 tones 1 semitone  \n- **Major 6th:** 4 tones  \n- **Minor 7th:** 4 tones 1 semitone  \n- **Major 7th:** 5 tones  \n- **Octave:** 5 tones 1 semitone"
    const markdown4 = "These are not all the intervals you can get, but it's a good sample to get started :-)  \n**CAREFUL!** Some intervals have the same tonal distance (they sound the same) but are called different things. Make sure you check the **note distance in the staff** before submitting your answer ^^ \nAlso... everyone has their own way of calling things, so maybe for a musician a **Major 2nd** is called a **b9** instead... so ye, whatever."
    useEffect(() =>{
        
        getSlides();
        console.log(activityGroup)
    }, [slideIndex, location]) // when location or slideIndex changes, set the slide index again to the new value

    async function getSlides() {

        try{
    
          const response = await fetch(`http://localhost:4000/slides/${activityGroup}/${slideIndex}`)  
          const data = await response.json();
        
          console.log(data)
          setSlideContent(data[0].content);
        
        }catch(err){console.log("an error :-)")}
        
      }

  return (
    
    <div className="pp-3 mb-2 bg-light text-dark rounded border border-dark">
        {slideContent &&
        <div></div>}
        {location.pathname.includes("Chords") &&
        <div><Markdown>{slideContent}</Markdown></div>}
        {location.pathname.includes("Intervals") &&
        <div><Markdown>{slideContent}</Markdown></div>}
        {location.pathname.includes("Scales") &&
        <div></div>}

    </div>

  )
}
