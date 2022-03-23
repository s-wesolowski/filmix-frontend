import logo from "./logo.svg"
import popular from "./popular.svg"
import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Home"/></Link>
            </div>
            <Link to="/popular"><img src={popular} alt="Popular" /></Link>
        </div>
    )
} 

export default NavBar;