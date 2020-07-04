import React from "react";

import { Switch, Route, Redirect } from "react-router";

import PokeList from "../components/PokeList";

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={PokeList} />
            <Route path="/pokemons" component={PokeList} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Routes;