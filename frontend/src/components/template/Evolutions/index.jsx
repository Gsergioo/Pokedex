import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi"
import api from "../../../services";

import "./styles.css";


const EvolutionChain = ({
    pokemon,
    id
}) => {

    const [pokeSpecies, setPokeSpecies] = useState({});
    const [evolutionChain, setEvolutionChain] = useState([]);

    function getEvolutionChain(data){
        function getChain(data, chain, index) {
            if(data){
                const url = data.species.url.split("/");
                chain.push({
                    name: data.species.name,
                    id: url[url.length - 2],
                    index
                })
                data.evolves_to.forEach((pokemon) => {
                    getChain(pokemon, chain, index + 1);
                })
            }
            return chain;
        }

        const evolutions = getChain(data.chain, [], 0);
        const newEvolutions = []

        for(let i = 0; i < evolutions.length; i++){
            if(!newEvolutions[evolutions[i].index]) newEvolutions[evolutions[i].index] = [];
            newEvolutions[evolutions[i].index].push({
                name: evolutions[i].name,
                id: evolutions[i].id
            }); 
        }
        console.log(newEvolutions);
        return newEvolutions;
    }

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
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/>
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