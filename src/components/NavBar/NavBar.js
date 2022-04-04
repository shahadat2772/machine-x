import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <p className="headerText">MachineX</p>
      <div className="linksContainer">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/dashboard">Dash-Board</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
