import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

import Logo from "../components/template/Logo";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Routes from "./routes";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer /> 
            </div>
        </BrowserRouter>
    )
}

export default App;