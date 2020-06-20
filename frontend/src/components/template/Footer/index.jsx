import React from "react";
import {FaHeart} from "react-icons/fa"

import "./styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <span>
                Desenvolvido com 
                <i> <FaHeart color={"red"} /> </i>
                por Guilherme!
            </span>
        </footer>
    )
}

export default Footer;