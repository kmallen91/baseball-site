import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <Link to="/"> Home </Link>
        <Link to="/teams">Teams </Link>
        <Link to="/players">Players </Link>
      </nav>
//       <form className="search">
//         <label>
//           Search
//           <input
//             className="search-bar"
//             type="text"
//             name="search"
//             placeholder="Search"
//           />
//         </label>
//       </form>
    </div>
  );
};

export default Navbar;
