import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import './styles/navbar.css'
import Homepage from "./components/homepage.js"
import './styles/teamCard.css'
import TeamPage from './components/teamPage.js'
import {Route } from 'react-router-dom'
import './styles/homepage.css'

function App() {
  return (
    <div className="App">
      <Navbar />
       <Route exact path ='/' component={Homepage} />
       <Route path = '/teams' component={TeamPage} />
      
    </div>
  );
}

export default App;
