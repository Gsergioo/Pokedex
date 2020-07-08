import React from "react";

import { Switch, Route, Redirect } from "react-router";

import PokeList from "../components/PokeList";
import PokeDetails from "../components/PokeDetails";

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={PokeList} />
            <Route path="/pokemons" component={PokeList} />
            <Route path="/pokedetails/:id" component={PokeDetails} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Routes;