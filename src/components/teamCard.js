import React, { useEffect } from "react";
import useInput from "./useInput.js";
import axios from "axios";
import { Link } from "react-router-dom";
import IndividualTeam from "./IndividualTeam";

const TeamCard = () => {
  const [teams, setTeams] = useInput([]);

  useEffect(() => {
    axios
      .get("https://api.sportsdata.io/v3/mlb/scores/json/teams", {
        method: "GET",
        headers: {
          "Ocp-Apim-Subscription-Key": "8b6b2979daf04317a5c067a795998b5f"
        }
      })
      .then(response => {
        console.log(response.data);
        setTeams(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setTeams]);

  return (
    <div className="card-container">
      {teams.map(team => (
        // <Link to={IndividualTeam} key={team.Key}>
        <div className="card" key={team.Key}>
          <h2 className="team-name"> {team.Name} </h2>
          <h3 className="team-location"> {team.City} </h3>
          <p className="team_division">
            {team.League} {team.Division}
          </p>
        </div>
        // </Link>
      ))}
    </div>
  );
};

export default TeamCard;
