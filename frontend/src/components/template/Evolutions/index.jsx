import React, { useEffect, useState } from "react";
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
                chain.push({
                    name: data.species.name,
                    index
                })
                data.evolves_to.forEach((pokemon) => {
                    getChain(pokemon, chain, index + 1);
                })
            }
            return chain;
        }

        const evolutions = getChain(data.chain, [], 0);
        console.log(evolutions);
        return evolutions;
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
        
        </div>
    );
}

export default EvolutionChain;