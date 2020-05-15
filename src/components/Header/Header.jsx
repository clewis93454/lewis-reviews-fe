import React from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";
import HeaderLink from "./HeaderLink/HeaderLink";
import logo from "../../images/icons8-hamburger-50.png";

const Header = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="header">
      <nav className="header-nav-container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="logo" />
          <p className="header-logo-text">Lewis Reviews</p>
        </Link>
        <ul className="header-links-container">
          <HeaderLink path="/" text={"Home"} currentPath={currentPath} />
          <HeaderLink path="/about" text={"About"} currentPath={currentPath} />
          <HeaderLink
            path="/contact"
            text={"Contact"}
            currentPath={currentPath}
          />
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default withRouter(Header);
