import './Post.css'
export default function({post}){ 
  const { title, userId, id, body} = post;
  return(
    <div className="Post">
      <h4>Title: {title}</h4>
      <p><small>UserId: {userId}</small></p>
      <p><small>postId: {id}</small></p>
      <p>{body}</p>
    </div>
  )
}