// This is the page that is displayed in the OUTLET of the /Theory page. 

import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'; // I use this to be able to fetch text from the backend and show it in my return.
                                       // Tried to do it with some sort of parser that converts strings containing html to actual html you can return,
                                       // but the common practice seems to be using markdown, so there you go ^^

export default function Slide() {

    const location = useLocation();
    const [slideContent, setSlideContent] = useState();
    const {slideIndex, activityGroup} = useParams() // we grab the index and wether we're doin chords, intervals or scales from the URL.

    useEffect(() =>{ //once again, I feel like i'm overdoing the useEffect but I'm still kinda confused with asyncronous stuff.
        
        getSlides();
        console.log(activityGroup)

    }, [slideIndex, location]) // when location or slideIndex changes, set the slide index again to the new value

    async function getSlides() {

        try{
    
          const response = await fetch(`http://localhost:4000/slides/${activityGroup}/${slideIndex}`) // gets each slide's content
          const data = await response.json();
        
          setSlideContent(data[0].content);
        
        }catch(err){console.log("an error :-)")}
        
      }

  return (
    
    <div className="pp-3 mb-2 bg-light text-dark rounded border border-dark">
        {slideContent &&
        <div><Markdown>{slideContent}</Markdown></div>} {/* the Markdown thing "converts" the markdowned text fetched to html stuff. Magical and I love it <3*/}
    </div>

  )
}
