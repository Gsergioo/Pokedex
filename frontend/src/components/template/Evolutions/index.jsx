import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom";
import api from "../../../services";


import {getEvolutionChain } from "../../../utils";
import "./styles.css";


const EvolutionChain = ({
    pokemon,
    id
}) => {

    const [pokeSpecies, setPokeSpecies] = useState({});
    const [evolutionChain, setEvolutionChain] = useState([]);

    useEffect(() => {
        api.get(`pokemon-species/${id}/`)
            .then( res => { 
                console.log(res.data.evolution_chain);
                setPokeSpecies(res.data);
            })
    }, []);

    useEffect(() => {
        if(pokeSpecies.evolution_chain){
            api.get(pokeSpecies.evolution_chain.url)
                .then(res => {
                    const evolutions = getEvolutionChain(res.data);
                    setEvolutionChain(evolutions);
                })
        }
    }, [pokeSpecies]);

    return (
        <div className="evolutions">
            <h3 className="evolution-title">Evolution Chain</h3>

            {
                evolutionChain.map((evolution, index) => 
         
                        <div className="evolution">
                           {
                                evolution.map((pokemon) => 
                                    <div className="evolution-card">
                                        <Link to={`/pokedetails/${pokemon.id}`}>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/>
                                        </Link>
                                        <span className="evolution-name">{pokemon.name}</span>
                                    </div>
    
                                )
                           } 
                            { 
                                evolutionChain[index + 1] ? <FiArrowRight size={50} color={"b92815"} style={{ verticalAlign: "center"}}/> : ""
                            }
                        </div>
                
                )
            }
        </div>
    );
}

export default EvolutionChain;