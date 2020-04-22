import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PlayerCard from './playerCard'

const AllPlayersPage = () => {

    const [players, setPlayers] = useState()

    useEffect(()=> {
        axios
      .get(
        `https://api.sportsdata.io/v3/mlb/scores/json/Players`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": "8b6b2979daf04317a5c067a795998b5f"
          }
        }
      )
      .then(res => {
        console.log(res);
        setPlayers(res.data);
      })
      .catch(err => console.log("error from get individual team", err));
  }, []);

  if (players) {
      return (
    <div className="individual-team-container">
    {players && players.map(player => (
      <Link to={`/players/${player.PlayerID}`}>
      <PlayerCard {...player} />
      </Link>
    ))}  
    </div>
  )}
  else {
      return (
          <div>
              Loading...
          </div>
      )
  }
}

export default AllPlayersPage