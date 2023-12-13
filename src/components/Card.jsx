import React, { useState } from 'react'

const Card = ( {data}) => {
  // const hahdler=()=>{
  //   alert("hi")
  // }
  
  const [changnum , setmy]=useState(0);
  useState
  const handler =()=>{
    setmy(changnum+1)
  }
  const low = () => {
    if(changnum > 0){
      setmy(changnum-1)
    }
    
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{changnum}</h2>
      <button onClick={handler}>+</button>
      <button onClick={low}>_</button>  
    </div>
  )
}

export default Card