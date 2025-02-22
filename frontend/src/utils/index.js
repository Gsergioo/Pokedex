import React, { useEffect } from "react";
import { useLocation, Route } from "react-router-dom";

export function getEvolutionChain(data){
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

export const ScrollToTop = (props) => {

    const { pathname } = useLocation();

    useEffect(() => {
        console.log(pathname);
        document.getElementsByClassName("app")[0].scrollTo(0, 0);
    }, [pathname] );

  return (
      <div className="app">
          {props.children}
      </div>
  )
}