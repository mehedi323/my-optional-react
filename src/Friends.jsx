import { useEffect, useState } from "react"

export default function(){
  const [user , newUser] =  useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => newUser(data))
  }, []);
  return(
    <div>
      <h1>UserId: {user.length}</h1>
    </div>
  )
}