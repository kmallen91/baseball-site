import React, { useEffect } from "react";
import useInput from "./useInput";
import axios from "axios";

const IndividualTeam = props => {
  const [players, setPlayers] = useInput();

  useEffect(() => {
    axios
      .get(
        `https://api.sportsdata.io/v3/mlb/scores/json/Players/${props.key}`,
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
  }, []);

  return <div className="individual-team-container">TEST</div>;
};

export default IndividualTeam;
