import React, { useState, useEffect } from "react";

import api from "../../services";

import Card from "../template/PokeCard";
import Main from "../template/Main";
import Search from "../template/Search";

import "./styles.css"

const PokeList = () => {    

    const [pokemons, setPokemons] = useState([]);
    const [pokeDeatils, setPokeDetails] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [offset, setOffset] = useState(0);
    const [nextState, setNextState] = useState(true);
    const [prevState, setPrevState] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const [limit, setLimit] = useState(12);

    function handleNextButton(){
        setOffset(offset + limit)   
        if(!prevState) setPrevState(true);
    }

    function handlePrevButton(){
        setOffset(offset - limit);
        if(!nextState) setNextState(true);
    }

    async function searchPokemon(name){
        let pokeInfo = []
        setIsHome(false);
        await api.get(`pokemon/${name}`)
            .then(res => {
                if(res.data){
                    pokeInfo[0] = {
                        id: res.data.id,
                        name: res.data.name,
                        types: res.data.types
                    }
                    setPokeDetails(pokeInfo);
                }
            })
            .catch((err) => {
                setIsHome(true);
                alert("Pokemon not found")
                
            })
    }

    
    useEffect(() => {
        function getPokeDetails() {
            Promise.all(
                 pokemons.map(async pokemon => {
                    await api.get(`pokemon/${pokemon.name}`)
                        .then(res => {
                            pokemon = {
                                id: res.data.id,
                                name: res.data.name,
                                types: res.data.types
                            }
                        })
                    return pokemon;
                })
            ).then(complete => {
                setPokeDetails(complete);
                setLoaded(true);
            });
        }
        
        getPokeDetails();
    }, [pokemons]);

    useEffect(() => {
        async function getPokemons(){
            console.log(window.innerWidth);
            let pokeInfos = [];

            await api.get(`pokemon/?limit=${limit}&offset=${offset}`).then(res => {
                pokeInfos = res.data.results;
            });
            setPokemons(pokeInfos);
        } 
        
        if(isHome === true){
            getPokemons();
        }
    }, [isHome, offset])

    useEffect(() => {
        async function getPokemons(){
            let pokeInfos = []
            
            await api.get(`pokemon/?limit=${limit}offset=0`).then(res => {
                pokeInfos = res.data.results;
            });
            setPokemons(pokeInfos);
        } 

        getPokemons()
    }, []);



    return (
        <Main icon="Home" title="Inicio"
            subtitle="Lista de pokemons">
            
            <Search searchPokemon={searchPokemon} /> 

            {loaded && pokeDeatils.length > 0 ?
                pokeDeatils.map((pokemon) => {
                    return <Card key={pokemon.id} id={pokemon.id}
                        name={pokemon.name} 
                        types={pokemon.types[1] ? [pokemon.types[0].type.name, pokemon.types[1].type.name] : [pokemon.types[0].type.name]} 
                        />
                }) : <p>Carregando</p>
            }

            <div className="pagination">
                <button onClick={() => handlePrevButton()} 
                        className={"pagination-button deactivate"}
                        disabled={offset > 0 && isHome ? "" : "disable"}
                        >
                    PREV
                </button>
                <button onClick={() =>{
                    setOffset(0);
                    setIsHome(true);   
                    }
                } 
                        className={"pagination-button deactivate"}
                        >
                    FIRST PAGE
                </button>
                <button onClick={() => handleNextButton()}
                        className="pagination-button"
                        disabled={ offset < 876 && isHome ? "" : "disabled"}
                        >
                    NEXT
                </button>
            </div>
        </ Main>
    );
}

export default PokeList;