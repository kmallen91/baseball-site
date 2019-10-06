import React, {useEffect} from "react"
import useInput from "./useInput.js"
import teamCard from "./teamCard.js"

const Homepage = () => {
const [teams, setTeams] = useInput([])
const [players, setPlayers] = useInput([])

useEffect (()=> {
    fetch("https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/2019", {
	"method": "GET",
	"headers": 	{	
		"Ocp-Apim-Subscription-Key": "8b6b2979daf04317a5c067a795998b5f"
        }
    })
    .then(response => {
	    console.log(response);
        // setTeams(response)
    })
    .catch(err => {
	    console.log(err);
    });
})


return (
    <div>
    TEST
    </div>


)

}

export default Homepage