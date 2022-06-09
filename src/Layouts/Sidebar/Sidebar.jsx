import logoSVG from "./logo.svg";
import popularSVG from "./popular.svg";
import accountSVG from "./account.svg";
import searchSVG from "./search.svg";
import logoutSVG from "./logout.svg";
import collectionSVG from "./collection.svg";
import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Auth from "../Auth";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.userData);

  const [showAuth, setShowAuth] = useState(false);

  const handleOpenAuth = () => {
    setShowAuth(true);
  };

  const handleCloseAuth = () => {
    setShowAuth(false);
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
      <li className="button" onClick={user ? handleLogout : handleOpenAuth}>
        {!user ? (
          <img id="account_button" src={accountSVG} alt="account" />
        ) : (
          <img id="account_button" src={logoutSVG} alt="account" />
        )}
      </li>
      {user && (
        <li className="button">
          <Link to="/collection">
            <img src={collectionSVG} alt="Collection" />
          </Link>
        </li>
      )}
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

      <Auth show={showAuth} close={handleCloseAuth} />
    </ul>
  );
};

export default Sidebar;
