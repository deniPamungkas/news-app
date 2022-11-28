import React from "react";
import LogReg from "../../Organism/LogReg/logReg";
import Navlinks from "../../Organism/Navlinks/navlinks";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>NAV_ICON_BALL</h1>
        <Navlinks/>
        <LogReg/>
    </nav>
  );
};

export default Navbar;
