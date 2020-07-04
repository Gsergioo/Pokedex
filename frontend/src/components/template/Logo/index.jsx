import React from "react";
import {GiPokecog} from "react-icons/gi";
import { Link } from "react-router-dom";
//import logo from "../../assets/imgs/logo.png"

import "./styles.css";
const Logo = () => {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <GiPokecog size={60} color={"b92815"}/>
            </Link>
        </aside>
    );
};


export default Logo;