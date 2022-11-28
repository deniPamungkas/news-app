import React from "react";
import { Link } from "react-router-dom";
import "./navlink.scss";

const Navlink = (props) => {
  return (
    <Link to={props.to}>
      <button
        className={`btn-navlink ${props.className}`}
        style={props.style}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </Link>
  );
};

export default Navlink;
