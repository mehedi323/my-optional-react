import { useEffect, useState } from "react"
import Tudos from "./Tudos";
 

export default function(){
  const [users , setUsers] =  useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h1>UserId: {users.length}</h1>
      {
        users.map(users => <Tudos users={users}></Tudos>)
      }
    </div>
  )
}