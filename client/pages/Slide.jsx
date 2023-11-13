import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Slide() {

    const location = useLocation();
    const [slideIndex, setSlideIndex] = useState();
    const [slideContent, setSlideContent] = useState();

    useEffect(() =>{
        setSlideIndex(location.pathname[location.pathname.length - 1]);
        getSlide();
    }, [location]) // when location changes, set the slide index again to the new value

    async function getSlide() {

        try{
    
          const response = await fetch(`http://localhost:4000/slides/Chords/${slideIndex}`)  
          const data = await response.json();
        
          console.log("exercicis filtrats: ", data)
          setSlideContent(data);
        
        }catch(err){console.log("an error :-)")}
        
      }
    

  return (
    
    <div className="pp-3 mb-2 bg-light text-dark rounded border border-dark">
        {location.pathname.includes("Chords") &&
        <div>Chords Slide {slideIndex}</div>}
        {location.pathname.includes("Intervals") &&
        <div>Intervals Slide {slideIndex}</div>}
        {location.pathname.includes("Scales") &&
        <div>Scales Slide {slideIndex}</div>}

    </div>

  )
}
