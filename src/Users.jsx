import { useEffect, useState } from "react"

export default function(){
  const [users , newUsers] = useState ([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => newUsers(data))
  }, [])
  

  return (
    <div>
      <h2>Users: {users.length}</h2>
    </div>
  )
}