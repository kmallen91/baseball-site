import React from "react"

const Navbar = () => {

    return (
        <div className="navbar">
            <nav className="nav">
                <a href="">Home </a>
                <a href="">Teams </a>
                <a href="">Players </a>

            </nav>
            <form className="search">
            <label >
            Search
            <input className="search-bar" type="text" name="search" placeholder="Search" /> 
            </label>
            </form>
        </div>
    )

}

export default Navbar