import React, { useEffect } from "react";
import useInput from "./useInput";
import axios from "axios";
import PlayerCard from './playerCard'

const IndividualTeam = props => {
  const [players, setPlayers] = useInput();
  const window_url = window.location.pathname.split('/')
  const team_name = window_url[2]

  useEffect(() => {
    axios
      .get(
        `https://api.sportsdata.io/v3/mlb/scores/json/Players/${team_name}`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": "8b6b2979daf04317a5c067a795998b5f"
          }
        }
      )
      .then(res => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch(err => console.log("error from get individual team", err));
  }, [setPlayers]);

  return (


   <div className="individual-team-container">{team_name}
    {players && players.map(player => (
      <PlayerCard {...player} />
    ))}
  
    </div>
  )
};

export default IndividualTeam;
