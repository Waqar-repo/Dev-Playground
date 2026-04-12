import React from 'react'
import '../app.css'
import picture from '../assets/loadingpic.jpg'; 
export default function Loadinghome() {

  return (
<>
<div className="countries-container"> 
  {
  Array.from({length:12}).map((e,i)=>{
    return (
<a key={i} className="country-card">
      <img src={picture} alt="flag" />
      <div className="card-text">
        <h3 className="card-title">loading...</h3>
        <p>
          <b>loading...</b>:
        </p>
        <p>
          <b>loading...</b>: 
        </p>
        <p>
          <b>loading...</b>:
        </p>
      </div>
    </a>
    )
  })
    
  }
    
    </div>



</>



  )
}