import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

//when it runs, it should fetch a random exercici. Maybe put them in an array of exercicis
//You can listen to the the app stores the hits and the misses. 

export default function Chords() {

    const [exercici, setExercici] = useState({})
    const [exercicis, setExercicis] = useState([])
    const [randomNum, setRandomNum] = useState(0)

    useEffect(() => {
    getExercicis();
    // fillExercicisArray();
    }, [])

  //just to test things:
  
  const placeholderArray = [];
        

  function fillExercicisArray(){



        console.log(placeholderArray)

        setRandomNum(Math.floor(Math.random() * 30));

        console.log(randomNum)

        if (!exercicis.includes(randomNum)){
            setExercicis([...exercicis, randomNum])
        }
        else{
            console.log("already in array")
        }
        console.log(exercicis)

  }


  const getExercicis = async () => {

    try{
    
      const response = await fetch("./api/exercicis/1") //em funciona així, no quan faig "./exercicis/whatever for some reason"
                                                                        //ask Germi
      const data = await response.json();
   
      setExercici(data[0]);

    }catch(err){console.log("an error :-)")}
  }


  return (

    <div >

          <h3>App test area</h3>

          <button onClick={fillExercicisArray}>Listen</button> <br /><br />
          {/* <img className="main_image" src={exercici.imatge}/> */}
          <div className= "pentagram">

            

          </div>
          <div className="buttonsArea">
            
            <h5>What kind of chord is it?</h5>
          <button>Major</button>
          <button>Minor</button>

       </div>

       </div>
  )
}
