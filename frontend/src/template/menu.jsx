import React from 'react'
import IconButton from './IconButton';


export default props => (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <a className="navbar-brand" href="#"><img src='https://image.ibb.co/eJYduo/logo.png' width='50px' alt='logo' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#/loja">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/loja/cadastro">page1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">page2</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" action='#/loja/cadastro'>
                <IconButton style="dark" type="submit" icon='user' name='Login'/>
            </form>
        </div>
    </nav>

)
