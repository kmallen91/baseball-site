import React, {useEffect} from "react"
import useInput from "./useInput.js";
import axios from "axios";
import { Link } from "react-router-dom";
import TeamCard from './teamCard.js'


const TeamPage = () => {

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

  if (teams) {
    return (
      <div className="card-container" >
          {teams.map(team => (
              <Link to={`/teams/${team.Key}`} >
              <TeamCard key={team.Key} name={team.Name} city={team.City} league={team.League} division={team.Division} logo ={team.WikipediaLogoUrl}/>
              </Link>
          ))}
      
      </div>
    )
  }
  else {
    return (
      <div className='loading'>
        Loading...
      </div>
    )
  }

}

export default TeamPage
