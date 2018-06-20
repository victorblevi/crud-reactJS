import React from 'react'

export default props => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">Minha Loja</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href='#/loja'>Produtos </a>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/loja/cadastro">Crud</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
