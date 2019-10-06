import React, {useEffect} from "react"
import useInput from "./useInput.js"
import TeamCard from "./teamCard.js"
import axios from "axios"

const Homepage = () => {

const [players, setPlayers] = useInput([])




return (
    <div >
    
        <TeamCard />
    
    </div>


)

}

export default Homepage