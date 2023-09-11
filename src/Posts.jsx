import { useEffect, useState } from "react"
import Post from "./Post"

export default function(){
  const [post , setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  } , [])
  return(
    <div>
      <h2>Your Post: {post.length}</h2>
      {
        post.map(post => <Post post={post}></Post>)
      }
    </div>
  )
}