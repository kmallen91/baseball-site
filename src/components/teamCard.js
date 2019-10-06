import React from "react"

const teamCard = (props) => {

    return (
        <div className="card">
            <h2 className="team-name"> {props.mlb_org} </h2>
            <h3 className="team-venue"> {props.venue_name} </h3>
            <p className="team_division"> {props.division_full} </p>

        </div>

    )
}

export default teamCard