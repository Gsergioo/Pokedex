import React from "react";

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
            <button className="details">Detalhes</button>
        </div>
    );  
}

export default Card;