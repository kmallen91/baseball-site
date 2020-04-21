import React from 'react'
import '../styles/playerCard.css'

const PlayerCard = (props) => {
    const { FirstName, LastName, BatHand, ThrowHand, Height, Weight, BirthDate, College, PhotoUrl, Experience } = props
    console.log('photo test', PhotoUrl)

    return (
      <div >      
          <div className="player-card" >
            <h2 className="player-name"> {FirstName}{LastName} </h2>
            <h3 className="player-bats-hits"> Bats: {BatHand} Throws: {ThrowHand} </h3>
            <p className="player-height-weight">
              Height: {Height}" Weight: {Weight}lbs.
            </p>
            <p className="player-age">
              Birthdate: {BirthDate} College: {College} Years in League: {Experience}
            </p>
            <img className='player-photo' src={PhotoUrl} />
          </div>
        
      </div>
    );
  };
  
  export default PlayerCard; 