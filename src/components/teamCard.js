import React from "react";



const TeamCard = (props) => {
  const { name, city, league, division, logo } = props
  return (
    <div >      
        <div className="team-card" >
          <h2 className="team-name team-info"> {name} </h2>
          <h3 className="team-location team-info"> {city} </h3>
          <p className="team_division team-info">
            {league} {division}
          </p>
          <img className='team-logo' src={logo} alt=''/>
        </div>
      
    </div>
  );
};

export default TeamCard;
