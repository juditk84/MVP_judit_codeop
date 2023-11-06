import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      
       <div className="main_window">
          <h3>App test area</h3>
          <img className="main_image" src="./src/assets/B.png" alt="" />

       </div>
       <div className="buttonsArea">
          <button>Major</button>
          <button>Minor</button>
       </div>
    </>
  )
}

export default App
