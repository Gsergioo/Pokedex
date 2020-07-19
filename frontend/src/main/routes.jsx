import React from "react";

import { Switch, Route, Redirect } from "react-router";

import PokeList from "../components/PokeList";
import PokeDetails from "../components/PokeDetails";

const Routes = () => {

    return (
        <Switch>
            <Route exact path={["/", "/pokedex"]} component={PokeList} />
            <Route path="/pokedetails/:id" component={PokeDetails} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Routes;