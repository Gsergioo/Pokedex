import React, { useEffect, useState } from "react";

import "./styles.css";
import api from "../../../services";

const AboutPokemon = ({
    pokemon,
    abilities
}) => {
    
    const [generation, setGeneraion] = useState("");

    useEffect(() => {
        api.get(`pokemon-species/${pokemon.id}`)
            .then(res => {
                let generationNum = res.data.generation.name.split("-");
                generationNum = generationNum[generationNum.length - 1];
                setGeneraion(generationNum);
            })
    }, [pokemon])

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
                    <span>Geração - {generation}</span>
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