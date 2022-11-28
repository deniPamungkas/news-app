import React, { useState } from "react";
import "./navlinks.scss";
import Navlink from "../../Atom/NavLink/navlink";
import { Link } from "react-router-dom";

const Navlinks = () => {
    const [active, setActive] = useState('Home')

   const handleActive = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setActive(e.target.innerHTML);
   }
  return (
    <div className="wrap-navlinks">
      <li className="navlinks">
        {" "}
        <Navlink className={`${active === "Home" ? "activ" : ""}`} name="Home" onClick={handleActive}/>
      </li>
      <li className="navlinks">
        {" "}
        <Navlink className={`${active === "World Cup" ? "activ" : ""}`} name="World Cup" onClick={handleActive}/>
      </li>
      <li className="navlinks">
        {" "}
        <Navlink className={`${active === "Transfers" ? "activ" : ""}`} name="Transfers" onClick={handleActive}/>
      </li>
      <li className="navlinks">
        {" "}
        <Navlink className={`${active === "Leagues" ? "activ" : ""}`} name="Leagues" onClick={handleActive}/>
      </li>
      <li className="navlinks">
        {" "}
        <Navlink className={`${active === "Table" ? "activ" : ""}`} name="Table" onClick={handleActive}/>
      </li>
    </div>
  );
};

export default Navlinks;
