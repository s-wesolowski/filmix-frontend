import logoSVG from "./logo.svg"
import popularSVG from "./popular.svg"
import accountSVG from "./account.svg"
import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Login from "./Login";

const NavBar = () => {

    let loggedIn = false;

    const [showLogin, setShowLogin] = useState(false);

    const handleClickAccount = () => {
        if (!loggedIn)
            setShowLogin(true);
    }

    const handleCloseLogin = () => {
        setShowLogin(false);
    }

    return (
        <ul className="navbar">
            <li className="logo">
                <Link to="/"><img src={logoSVG} alt="Home"/></Link>
            </li>
            <li className="button">
                <img id="account_button" onClick={handleClickAccount} src={accountSVG} alt="account"></img>
            </li>
            <li className="button">
                <Link to="/popular"><img src={popularSVG} alt="Popular" /></Link>
            </li>


            <Login show={showLogin} close={handleCloseLogin}/>
        </ul>
    )
} 

export default NavBar;