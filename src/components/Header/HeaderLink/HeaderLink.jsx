import React from "react";
import "./HeaderLink.css";
import { Link } from "react-router-dom";

const HeaderLink = (props) => {
  const { currentPath, path, alternatePath, text } = props;
  return (
    <li>
      <Link
        className={"header-link"}
        id={`${
          currentPath === path || currentPath === alternatePath
            ? "header-link-active"
            : ""
        }`}
        to={props.path}
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
