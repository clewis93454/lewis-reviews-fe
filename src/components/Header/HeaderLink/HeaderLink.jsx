import React from "react";
import "./HeaderLink.css";
import { Link } from "react-router-dom";

const HeaderLink = (props) => {
  const { currentPath, path, text } = props;
  return (
    <li>
      <Link
        className={"header-link"}
        id={`${currentPath === path ? "header-link-active" : ""}`}
        to={props.path}
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
