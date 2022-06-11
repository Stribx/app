import React, { useState } from "react";
import logo from './img/logo.png'
import './Nav.css';
import { Link } from "react-router-dom"

export default function Nav() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
  
    return (
    <div className="Nav">
        <nav> 
        <Link to="/"><img className='logo' src={logo} alt="home"/></Link>
        <ul className={`links ${isActive ? "" : "active"}`}>
            <li><Link to="/Navi">Navi</Link></li>
            <li><Link to="/Ksos">K-sos</Link></li>
            <li><Link to="/Agent">Agent</Link></li>
        </ul>
        <div className={`toggle ${isActive ? "" : "active"}`} onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </nav>
    </div>
  );
}