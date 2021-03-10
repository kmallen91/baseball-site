import React from "react"
import { Link } from 'react-router-dom'
import '../styles/homepage.css'


const Homepage = () => {

return (
    <div className="page-container" >    
        <h2>MLB STATS PAGE </h2>
        <Link to ='/teams' className='team-link'>Visit the Teams here!</Link><br/> <br/>    
        <Link to ='/players' className='player-link'>Find all the Players here!</Link>    
    </div>
)}

export default Homepage
