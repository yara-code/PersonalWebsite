import React from 'react'
// import './App.scss'
import Navigation from './components/Navigation'
//import Thumbnail from './components/thumbnail'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/cards'

function App() {
  return(
    <div className="App">
        <Navigation></Navigation>
        <Card></Card>
        
    </div>

  )
}

export default App;