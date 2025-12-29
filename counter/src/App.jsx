import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=10;
  let[counter,setCounter] = useState(10);
  const incr = ()=>{
    //counter++;
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)  //button click karne pe ek hi baar counter increment hoga
    //Teeno setCounter(counter + 1) me same old value (10) use ho rahi hai
    // React state updates ko batch karta hai (performance ke liye)

    setCounter((prev)=>prev+1)
    setCounter(prev=>prev+1)
  }

  const decr= ()=>{
    //counter--;
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Practice</h1>
      <h2>this is the counter: {counter}</h2>
      <button onClick={incr}>increase</button>
      <br/>
      <button onClick={decr}>decrease</button>
    </>
  )
}

export default App
