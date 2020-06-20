import React from "react";

import Main from "../template/Main";

const Home = (props) => {
    return (
        <Main icon="home" title="Inicio"
            subtitle="Segundo Projeto de React">
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">
                Sistema de cadastro para aprender React e outros conteudos
            </p>
        </ Main>
    );
}

export default Home;