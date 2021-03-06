import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/playerpage.css'


const PlayerPage = () => {

    const [player, setPlayer] = useState()
    const [stats, setStats] = useState()
    const window_url = window.location.pathname.split('/')
    const player_id = window_url[2]
    console.log(player_id)

    
  // grab player info from ID number
    useEffect(()=> {
      axios
      .get(
        `https://api.sportsdata.io/v3/mlb/scores/json/Player/${player_id}`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": "8b6b2979daf04317a5c067a795998b5f"
          }
        }
      )
      .then(res => {
        console.log(res.data);
        setPlayer(res.data);
      })
      .catch(err => console.log("error from get individual player", err));
    }, []);

    // grab 2019 stats from player ID number
    useEffect(()=> {
      axios
      .get(
        `https://api.sportsdata.io/v3/mlb/stats/json/PlayerSeasonStatsByPlayer/2019/${player_id}`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": "8b6b2979daf04317a5c067a795998b5f"
          }
        }
      )
      .then(res => {
        console.log(res.data);
        setStats(res.data);
      })
      .catch(err => console.log("error from get stats", err));
    }, []);

  
  if (player && stats && player.Status === 'Active'){
    const {Status, FirstName, LastName, BatHand, ThrowHand, Height, Weight, BirthDate, College, PhotoUrl, Experience, Position } = player
    const {PositionCategory, Started, Games, AtBats, Runs, Hits, Singles, Doubles, Triples, HomeRuns, RunsBattedIn, BattingAverage, Strikeouts, Walks, StolenBases, PitchesThrown, PitchingBattingAverageAgainst, PitchingBlownSaves, PitchingCompleteGames, PitchingDoubles, PitchingEarnedRuns, PitchingFlyOuts, PitchingHitByPitch, PitchingHits, PitchingNoHitters, PitchingOnBasePercentage, PitchingOnBasePlusSlugging, PitchingPerfectGames, PitchingPlateAppearances, PitchingQualityStarts, PitchingRuns, PitchingShutOuts, PitchingSingles, PitchingStrikeouts, PitchingStrikeoutsPerNineInnings, PitchingTotalBases, PitchingTriples, PitchingWalks, PitchingWalksPerNineInnings, Saves, PitchingHomeRuns } = stats

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

    if (PositionCategory === 'P') {
      return (
        <div className='player-container'>
            <img className='player-page-photo player-info' src={PhotoUrl} alt=''/>
            <div className='player-info-container'>
              <h2 className="player-name player-info"> {FirstName} {LastName} </h2>
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
              <p className="player-info">
                Status: {Status}
              </p>
            </div>
            
            <div className='player-stat-container'>
              <p className="player-info"> Pitches Thrown: {PitchesThrown} </p>
              <p className="player-info">  Pitching Batting Average Against: { PitchingBattingAverageAgainst} </p>
              <p className="player-info"> Blown Saves: {PitchingBlownSaves}</p>
              <p className="player-info"> Complete Games: {PitchingCompleteGames}</p>              
              <p className="player-info"> Perfect Games: {PitchingPerfectGames}</p>              
              <p className="player-info"> Pitching Singles: {PitchingSingles}</p>
              <p className="player-info"> Pitching Doubles: {PitchingDoubles}</p>
              <p className="player-info"> Pitching Triples: {PitchingTriples}</p>
              <p className="player-info"> Pitching Home Runs: {PitchingHomeRuns}</p>
              <p className="player-info"> Earned Runs: {PitchingEarnedRuns}</p>
              <p className="player-info"> Pitching Fly Outs: {PitchingFlyOuts}</p>
              <p className="player-info"> Hit By Pitch: {PitchingHitByPitch}</p>
              <p className="player-info"> Hits: {PitchingHits}</p>
              <p className="player-info"> No Hitters: {PitchingNoHitters}</p>
              <p className="player-info"> Batting Average: {BattingAverage}</p>
              <p className="player-info"> Pitching On Base Percentage: {PitchingOnBasePercentage}</p>
              <p className="player-info"> Pitching On Base Plus Slugging: {PitchingOnBasePlusSlugging}</p>
              <p className="player-info"> Pitching Plate Appearances: {PitchingPlateAppearances}</p>
              <p className="player-info"> Quality Starts: {PitchingQualityStarts}</p>
              <p className="player-info"> Runs: {PitchingRuns}</p>
              <p className="player-info"> Shut Outs: {PitchingShutOuts}</p>              
              <p className="player-info"> Strikeouts: {PitchingStrikeouts}</p>
              <p className="player-info"> Strikeouts Per Nine Innings: {PitchingStrikeoutsPerNineInnings}</p>
              <p className="player-info"> Total Bases: {PitchingTotalBases}</p>              
              <p className="player-info"> Walks: {PitchingWalks}</p>
              <p className="player-info">  Walks Per Nine Innings: {PitchingWalksPerNineInnings}</p>
              <p className="player-info"> Saves: {Saves}</p>
            </div>
        </div>
    )} else {

      return (
        <div className='player-container'>
            <img className='player-page-photo player-info' src={PhotoUrl} alt=''/>
            <div className='player-info-container'>
              <h2 className="player-name player-info"> {FirstName} {LastName} </h2>
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
              <p className="player-info">
                Status: {Status}
              </p>
            </div>
            <div className='player-stat-container'>
              <p className="player-info"> Games Started: {Started} </p>
              <p className="player-info"> Games Played: {Games} </p>
              <p className="player-info"> At Bats: {AtBats}</p>
              <p className="player-info"> Runs: {Runs}</p>
              <p className="player-info"> Hits: {Hits}</p>
              <p className="player-info"> Singles: {Singles}</p>
              <p className="player-info"> Doubles: {Doubles}</p>
              <p className="player-info"> Triples: {Triples}</p>
              <p className="player-info"> Home Runs: {HomeRuns}</p>
              <p className="player-info"> RBI: {RunsBattedIn}</p>
              <p className="player-info"> Batting Average: {BattingAverage}</p>
              <p className="player-info"> Strikeouts: {Strikeouts}</p>
              <p className="player-info"> Walks: {Walks}</p>
              <p className="player-info"> Stolen Bases: {StolenBases}</p>
            </div>
        </div>
    )}
  }   
  else if (player && player.Status !== 'Active'){
    return (
      <div className='not-active'>
        Player Not on Active Roster
      </div>
    )
  }
  else {
    return (
      <div className='loading'>
        Loading...
      </div>
    )
  }    
}

export default PlayerPage
