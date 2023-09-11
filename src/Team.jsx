import { useState } from "react"

export default function(){
  const [count , newCount] = useState(12)
   const clickHandle = () =>{
    const result = count + 1 ;
    newCount (result)
   }
   const removeHandle = () =>{ 
    newCount (count -1 )
   }
  const maniStyle ={
    border:'2px solid red',
    padding: '10px',
  }
  return(
    <div>
      <h2 style={maniStyle}>My Name is Khan: {count}</h2>
      <button onClick={clickHandle}>Click More</button>
      <button onClick={removeHandle}>Remove More</button>
    </div>
  )
}