import React from "react";
import {FiHome} from "react-icons/fi";

import "./styles.css";

const Header = (props) => {
    return (
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-3">
                <FiHome size={30} style={{verticalAlign: "baseline"}}/> <span> {props.title} </span>
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    )
}

export default Header;