import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import './styles/navbar.css'
import Homepage from "./components/homepage.js"
import './styles/teamCard.css'

function App() {
  return (
    <div className="App">
       <Navbar />
       <Homepage />
      
    </div>
  );
}

export default App;
