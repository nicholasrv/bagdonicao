import './App.css'
import React from 'react'
import { cities } from "./mock/cidades.js";
import ListItem from "./components/ListItem";


function App() {

  return (

    <div className="App">
      {cities.map( (cidade) => {
         if (cidade.country=='BRA') {return <ListItem key={cidade.id} cidade={cidade}/>}
        })}
    </div>

  )
}

export default App