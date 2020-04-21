import React from "react";
import IndividualTeam from "./IndividualTeam";


const TeamCard = (props) => {
  const { name, city, league, division, logo } = props
  return (
    <div >      
        <div className="card" >
          <h2 className="team-name"> {name} </h2>
          <h3 className="team-location"> {city} </h3>
          <p className="team_division">
            {league} {division}
          </p>
          <img className='team-logo' src={logo} />
        </div>
      
    </div>
  );
};

export default TeamCard;
