import React, { useEffect } from "react";

import api from "../../services";
import "./styles.css";

import Main from "../template/Main";
import { useState } from "react";

const PokeDetails = (props) => {

    const id = props.match.params.id;
    const [pokemon, setPokemon] = useState({});
    const [stats, setStats] = useState([]);
    const [abilities, setAbilitites] = useState([]);

    useEffect(() => {
        const id = props.match.params.id;

        async function getPokemon(){
            await api.get(`pokemon/${id}`)
                .then(res => {
                    setPokemon({
                        ...res.data,
                        name: res.data.name.toUpperCase()
                    });
                    console.log("batata");
                    setStats(res.data.stats);
                    setAbilitites(res.data.abilities);
                });
        }

        getPokemon();
    }, []);

    return (
        <Main icon="Star"
        title="Detalhes"
        subtitle={`Detalhes do ${pokemon.name}`}
        >
            <div className="container-details">
                <h1 className="pokemon-name">{pokemon.name} - Nº{pokemon.id}</h1>
                <div className="about-pokemon">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" className="about-image"/>
                    <div className={`about-infos ${pokemon.types ? pokemon.types[0].type.name : ""}`}>
                        <div className="height">
                            <h3>Height:</h3>
                            <span>{pokemon.height/10}m</span>
                        </div>
                        <div className="height">
                            <h3>Weight:</h3>
                            <span>{pokemon.weight}Kg</span>
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
            </div>   
        </Main>
    )
}

export default PokeDetails;