import React from 'react'
import '../styles/playerCard.css'

const PlayerCard = (props) => {
    const { FirstName, LastName, BatHand, ThrowHand, Height, Weight, BirthDate, College, PhotoUrl, Experience } = props
    console.log('photo test', PhotoUrl)

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
            <img className='player-photo' src={PhotoUrl} />
            <h2 className="player-name"> {FirstName} {LastName} </h2>
            <h3 className="player-bats-hits"> Bats: {BatHand} Throws: {ThrowHand} </h3>
            <p className="player-height-weight">
              Height: {formattedHeight} Weight: {Weight}lbs.
            </p>
            <p className="player-age">
              Birthdate: {formattedBirthDay} College: {College} Years in League: {Experience}
            </p>
          </div>
        
      </div>
    );
  };
  
  export default PlayerCard; 