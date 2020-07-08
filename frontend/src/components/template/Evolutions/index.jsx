import React, { useEffect, useState } from "react";
import api from "../../../services";

import "./styles.css";


const EvolutionChain = ({
    pokemon,
    id
}) => {

    const [pokeSpecies, setPokeSpecies] = useState({});

    function getEvolutionChain(data) {
        const nextEvolve = data.evolves_to;
        const evolutionChain = [nextEvolve.species.name];

        while(nextEvolve.length !== 0){
            getEvolutionChain(nextEvolve);
        }
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
                    const evolutionChain = getEvolutionChain(res.data.chain);
                    setEvolutionChain(evolutionChain);
                })
        }
    }, [pokeSpecies]);

    return (
        <div className="evolutions">
        
        </div>
    );
}

export default EvolutionChain;