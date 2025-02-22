import React, { useEffect, useState } from "react";

import api from "../../services";
import "./styles.css";

import Main from "../template/Main";
import AboutPokemon from "../template/AboutPokemon";
import EvolutionChain from "../template/Evolutions";
import Stats from "../template/Stats";

const PokeDetails = (props) => {

    const id = props.match.params.id;
    const [pokemon, setPokemon] = useState({});
    const [abilities, setAbilitites] = useState([]);

    useEffect(() => {
        async function getPokemon(){
            await api.get(`pokemon/${id}`)
                .then(res => {
                    setPokemon({
                        ...res.data,
                        name: res.data.name.toUpperCase()
                    });
                    setAbilitites(res.data.abilities);
                });
        }

        getPokemon();
    }, [id]);

    return (
        <Main icon="Star"
        title="Detalhes"
        subtitle={`Detalhes do ${pokemon.name}`}
        >
            <div className="container-details">
                <h1 className="pokemon-name">{pokemon.name} - Nº{pokemon.id}</h1>
                <AboutPokemon pokemon={pokemon} abilities={abilities}/> 
                <EvolutionChain pokemon={pokemon} id={id}/>  
                <Stats stats={pokemon.stats} />
            </div> 
        </Main>
    )
}

export default PokeDetails;