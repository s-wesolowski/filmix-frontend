import logoSVG from "./logo.svg";
import popularSVG from "./popular.svg";
import accountSVG from "./account.svg";
import searchSVG from "./search.svg";
import logoutSVG from "./logout.svg";
import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Login from "../Login";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  let loggedIn = false;
  let { user } = useSelector((state) => state.userData);

  console.log(user);

  const [showLogin, setShowLogin] = useState(false);

  const handleClickAccount = () => {
    if (!loggedIn) setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    dispatch({
      type: "SET_USERDATA",
      user: null,
    });
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    sessionStorage.removeItem("access");
    sessionStorage.removeItem("refresh");
  };

  return (
    <ul className="sidebar">
      <li className="logo">
        <Link to="/">
          <img src={logoSVG} alt="Home" />
        </Link>
      </li>
      <li className="button">
        {!user ? (
          <img
            id="account_button"
            onClick={handleClickAccount}
            src={accountSVG}
            alt="account"
          />
        ) : (
          <img
            id="account_button"
            onClick={handleLogout}
            src={logoutSVG}
            alt="account"
          />
        )}
      </li>
      <li className="button">
        <Link to="/popular">
          <img src={popularSVG} alt="Popular" />
        </Link>
      </li>
      <li className="button">
        <Link to="/search">
          <img id="search_button" src={searchSVG} alt="Search" />
        </Link>
      </li>

      <Login show={showLogin} close={handleCloseLogin} />
    </ul>
  );
};

export default Sidebar;
