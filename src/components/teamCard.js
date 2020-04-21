import React, { useEffect } from "react";


const TeamCard = (props) => {
  const { key, name, city, league, division } = props
  return (
    <div >      
        <div className="card" >
          <h2 className="team-name"> {name} </h2>
          <h3 className="team-location"> {city} </h3>
          <p className="team_division">
            {league} {division}
          </p>
        </div>
      
    </div>
  );
};

export default TeamCard;
