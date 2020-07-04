import React from "react";
import {FiHome, FiUsers} from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

const Nav = () => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/" className="">
                    <FiHome style={{verticalAlign: 'baseline'}} /> <span> Home</span>
                </Link>
                <Link to="/users" className="">
                    <FiUsers style={{verticalAlign: "baseline"}} /> <span> Usuários </span>
                </Link>
            </nav>
        </aside> 
   )
}

export default Nav;