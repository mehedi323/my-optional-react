import './Tudus.css'
export default function({users}){
  const {title, id, userId, completed} = users;
  return(
    <div className="tudos">
      <h4>title: {title}</h4>
      <p><small>id: {id}</small></p>
      <p><small>userId: {userId}</small></p>
      <p>completed: {completed}</p>
    </div>
  )
}