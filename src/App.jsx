import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'


function App() {
  return (
    <>
      <h1>React or Samething</h1>
      <Team></Team>
      <Posts></Posts>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}


export default App
