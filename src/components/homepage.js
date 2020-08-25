import React from "react"
import { Link } from 'react-router-dom'


const Homepage = () => {

return (
    <div className="page-container" >    
        <h2>MLB STATS PAGE </h2>
        <Link to ='/teams'>Visit the Teams here!</Link><br/> <br/>    
        <Link to ='/players'>Find all the Players here!</Link>    
    </div>
)}

export default Homepage
