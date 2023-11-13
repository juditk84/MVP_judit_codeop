import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Slide() {

    const location = useLocation();
    const [activityGroup] = useState(new URLSearchParams(location.search).get('activityGroup'))
    const [slideIndex, setSlideIndex] = useState();
    const [slideContent, setSlideContent] = useState();

    useEffect(() =>{
        setSlideIndex(location.pathname[location.pathname.length - 1]);
        getSlide();
        console.log(activityGroup)
    }, [slideIndex, location]) // when location or slideIndex changes, set the slide index again to the new value

    async function getSlide() {

        try{
    
          const response = await fetch(`http://localhost:4000/slides/${activityGroup}/${slideIndex}`)  
          const data = await response.json();
        
          console.log(data)
          setSlideContent(data);
        
        }catch(err){console.log("an error :-)")}
        
      }

  return (
    
    <div className="pp-3 mb-2 bg-light text-dark rounded border border-dark">
        {slideContent &&
        <div>{slideContent[0]?.content}</div>}
        {location.pathname.includes("Chords") &&
        <div>Chords Slide {slideIndex}</div>}
        {location.pathname.includes("Intervals") &&
        <div>Intervals Slide {slideIndex}</div>}
        {location.pathname.includes("Scales") &&
        <div>Scales Slide {slideIndex}</div>}

    </div>

  )
}
