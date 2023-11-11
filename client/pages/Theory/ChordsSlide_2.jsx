import React from 'react'


export default function ChordsSlide_1() {
  return (
    <div className="pp-3 mb-2 bg-light text-dark rounded border border-dark">
      <p>Specifically, in the dodecaphonic-occidental-music bubble we live in, <br />
        chords are GENERALLY built by stacking <b>thirds</b>. Do you remember thirds?</p>

      <div className="container mb-2">

        <div className="row">
          <div className="col-sm">
            <div className="card card-body">
              <p><b>major 3rd:</b></p>
                <img className="img-thumbnail" src="../public/assets/slides/chordsslides/c_major_interval.png" alt="" />
              <p>a major 3rd will ALWAYS be 2 tones away from its root.</p>
            </div>
          </div>
          <div className="col-sm">
            <div className="card card-body">
              <p><b>minor 3rd:</b></p>
                <img className="img-thumbnail" src="../public/assets/slides/chordsslides/c_minor_interval.png" alt="" />
              <p>a minor 3rd will ALWAYS be 1 and a half tones away from its root.</p>
            </div>
          </div>
        </div>
      
      </div>


    </div>
  )
}
