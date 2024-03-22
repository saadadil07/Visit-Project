import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [message, setMessage] = useState('')
  let [visit,setVisit] = useState(0)
  let go = ()=>{
    visit++
    setVisit(visit)
    if(visit===5){
      message = 'You Love Karachi'
      setMessage(message)
    }
    if(visit>10){
      message = 'Wow you are insane ...'
      setMessage(message)
    }
  }
  let cancel = ()=>{
    visit--
    setVisit(visit)
    if(visit<5){
      message = ''
      setMessage(message)
    }
    if(visit<0){
      visit = 0
      setVisit(visit)
      alert('Negative visits are not allowed !')
    }
  }
  return (
    <>
        <h1> Karachi Tour </h1>
        <h2> Visit : {visit} </h2>
        <button onClick={go}> Go </button> <br /> <br />
        <button onClick={cancel}> Cancel </button>
        <p> {message} </p>
    </>
  )
}

export default App
