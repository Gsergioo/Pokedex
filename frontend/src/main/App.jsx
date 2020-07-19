import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

import Logo from "../components/template/Logo";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Routes from "./routes";
import { ScrollToTop } from "../utils";

const App = () => {
    

    return (
        <BrowserRouter >
            <ScrollToTop>    
                    <Logo />
                    <Nav />
                    <Routes/>
                    <Footer /> 
            </ScrollToTop>
        </BrowserRouter>
   )
}

export default App;