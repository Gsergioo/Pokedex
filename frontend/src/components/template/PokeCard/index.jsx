import React from "react";
import {Link} from "react-router-dom";

import "./styles.css";

const Card = ({
    name,
    types,
    id
}) => {
    
    return (
        <div className="container">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="bulbasaur"/>
            <span className="name">{name}</span>
            <div className="types">
               {types &&  types.map((type) => {
                       return <span key={type} className={`type ${type}`}>{type}</span>
                   })
               }
            </div>
            <Link to={`pokedetails/${id}`}>
                <button className="details">Detalhes</button>
            </Link>
        </div>
    );  
}

export default Card;