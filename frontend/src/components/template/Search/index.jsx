import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";

import "./styles.css";


const Search = ({
    searchPokemon
}) => {

    const [searchText, setSearchText] = useState("");

    return (
        <form 
            className="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2"
            onSubmit={e => {    
                e.preventDefault(); 
                searchPokemon(searchText);
            }}
            >
            <FaSearch />
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Digite um nome ou Id"
                aria-label="Search" onChange={(e) => setSearchText(e.target.value)} />
            <button type="button" className="search-button" onClick={() => searchPokemon(searchText)}>Search</button>
        </form>
    )
}

export default Search;