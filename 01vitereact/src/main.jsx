import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'

// }

const reactElement=React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click me to visit google'
)
const anotherElement =(
  <a href="https://google.com" target='_blank'> Google pe jaana hai</a>
)
createRoot(document.getElementById('root')).render(
    // MyApp()
    <App />
    //reactElement aise karenge toh kaam nahi karega jaise cutomreact me custom render tha, uski tarah yaha bhi render me dekhna padega kaise kaam hota hai
    // anotherElement

)
