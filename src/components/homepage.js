import React, {useEffect} from "react"
import useInput from "./useInput.js"
import teamCard from "./teamCard.js"

const Homepage = () => {
const [teams, setTeams] = useInput([])
const [players, setPlayers] = useInput([])

useEffect (()=> {
    fetch("https://mlb-data.p.rapidapi.com/json/named.team_all_season.bam?all_star_sw='N'&sort_order=league_full_asc&season='2019'", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mlb-data.p.rapidapi.com",
		"x-rapidapi-key": "6e478de98amsh655b69a8794fd92p1e0438jsnb5233043de40"
	}
})
.then(response => {
	console.log(response.queryResults.row);
    setTeams(response.queryResults.row)
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