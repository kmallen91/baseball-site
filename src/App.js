import React, { useState } from "react";
import { Route } from "react-router-dom";

//Context
import { BaseballContext } from './context/BaseballContext'

//Components
import Navbar from "./components/navbar.js";
import Homepage from "./components/homepage.js";
import TeamPage from "./components/teamPage.js";
import PlayerPage from './components/playerPage';
import AllPlayersPage from './components/allPlayersPage'
import IndividualTeam from "./components/IndividualTeam.js";

//Styling
import "./styles/navbar.css";
import "./styles/teamCard.css";
import "./App.css";
import "./styles/homepage.css";



function App() {

  const [baseballState, setBaseballState] = useState({
      players: [],
      teams: [],
      selectedTeam1: [],
      selectedTeam2: [],
      selectedPlayer1: [],
      selectedPlayer2: [],
  
  })
  return (
    <div className="App">
      <BaseballContext.Provider value={{baseballState, setBaseballState}} >
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/teams" component={TeamPage} />
        <Route exact path="/players" component={AllPlayersPage} />
        <Route path='/teams/:id' render={props => <IndividualTeam {...props} />} />
        <Route path='/players/:id' render={props => <PlayerPage {...props} />} />
      </BaseballContext.Provider>
    </div>
  );
}

export default App;
