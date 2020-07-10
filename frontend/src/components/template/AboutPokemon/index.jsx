import React from "react";

import "./styles.css";

const AboutPokemon = ({
    pokemon,
    abilities
}) => {
    
    return (
        <div className="about-pokemon">
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" className="about-image"/>
            <div className={`about-infos ${pokemon.types ? pokemon.types[0].type.name : ""}`}>
                <div className="height">
                    <h3>Height:</h3>
                    <span>{pokemon.height/10}m</span>
                </div>
                <div className="height">
                    <h3>Weight:</h3>
                    <span>{pokemon.weight/10}Kg</span>
                </div>
                <div className="height">
                    <h3>Geração:</h3>
                    <span>Geração I</span>
                </div>
                <div className="height">
                    <h3>Habilidades:</h3>
                    <span>{abilities[0] ? abilities.length > 1 ? `${abilities[0].ability.name}, ${abilities[1].ability.name}` : abilities[0].ability.name  : ""}</span>
                </div>                        
            </div>
        </div>
    )
}

export default AboutPokemon;