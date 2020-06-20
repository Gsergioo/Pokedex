import React from "react";
import {FiHome, FiUsers} from "react-icons/fi";

import "./styles.css";

const Nav = () => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <a href="#/" className="">
                    <FiHome style={{verticalAlign: 'baseline'}} /> <span> Home</span>
                </a>
                <a href="#/" className="">
                    <FiUsers style={{verticalAlign: "baseline"}} /> <span> Usuários </span>
                </a>
            </nav>
        </aside> 
   )
}

export default Nav;