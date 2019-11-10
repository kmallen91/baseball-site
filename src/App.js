import React from "react";
//Components
import Navbar from "./components/navbar.js";
import Homepage from "./components/homepage.js";
import TeamPage from "./components/teamPage.js";
import { Route } from "react-router-dom";
//Styling
import "./styles/navbar.css";
import "./styles/teamCard.css";
import "./App.css";
import "./styles/homepage.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route path="/teams" component={TeamPage} />
    </div>
  );
}

export default App;
