import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import loja from '../Loja/LojaHome'
import Add from '../Loja/Add'
import Crud from '../loja/Crud'

export default props => (
    <Router history={hashHistory}>
        <Route path='/loja' component={loja}/>
        <Route path='/loja/cadastro' component={Add}/>
        <Route path='/loja/crud' component={Crud}/>
        <Redirect from='*' to='/loja'/>
    </Router>
)