import React from "react";
import {FaReact} from "react-icons/fa";
//import logo from "../../assets/imgs/logo.png"

import "./styles.css";

const Logo = () => {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <FaReact size={60}/>
            </a>
        </aside>
    );
};


export default Logo;