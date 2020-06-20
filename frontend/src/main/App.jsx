import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

import Logo from "../components/template/Logo";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Home from "../components/Home";


const App = () => {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Home />
            <Footer /> 
        </div>
    )
}

export default App;