import React from "react";
import "./Footer.css";
import StyledHr from "../StyledHR/StyledHR";

const Footer = () => {
  return (
    <footer className="footer">
      <StyledHr />
      <p>
        Lewis Reviews | &copy; Copyright 2020 | Logo provided by{" "}
        <a href="https://icons8.com">Icons8</a>
      </p>
    </footer>
  );
};

export default Footer;
