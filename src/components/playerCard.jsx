import React from 'react'
import '../styles/playerCard.css'

const PlayerCard = (props) => {
    const { FirstName, LastName, BatHand, ThrowHand, Height, Weight, BirthDate, College, PhotoUrl, Experience, Position, Team } = props

    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    function formatHeight(height){
        let h = Math.floor(height / 12)
        let r = height % 12
        return `${h}' ${r}"`
    }

    const formattedBirthDay = formatDate(BirthDate)
    const formattedHeight = formatHeight(Height)

    return (
      <div >      
          <div className="player-card" >
            <img className='player-photo player-info' src={PhotoUrl} alt=''/>
            <h2 className="player-name player-info"> {FirstName} {LastName} </h2>
            <h3 className="player-info"> Team: {Team} </h3>
            <h3 className="player-bats-hits player-info"> Bats: {BatHand} Throws: {ThrowHand} </h3>
            <p className="player-age">
              Position: {Position}
            </p>
            <p className="player-height-weight player-info">
              Height: {formattedHeight} Weight: {Weight}lbs.
            </p>
            <p className="player-info">
              Birthdate: {formattedBirthDay} 
            </p>
            <p className="player-info">
              College: {College ? College : 'N/A'} 
            </p>
            <p className="player-info">
              Years in League: {Experience}
            </p>
          </div>
        
      </div>
    );
  };
  
  export default PlayerCard; 