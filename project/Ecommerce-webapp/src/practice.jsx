import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// let h1element=<h1>this is jsx heading</h1>                               //jsx
//let h1element=React.createElement("h1", {}, "this is react heading");       //React

// function hi(){
//   return(
//   <h1>hi,welcome to react</h1>
// )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
     </React.StrictMode>,
  //   <App />
    //h1element
   
   // <hi/>
  )