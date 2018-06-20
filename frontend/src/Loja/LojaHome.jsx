import React, { Component } from 'react'
import axios from 'axios';

import IconButton from '../template/IconButton'
import PageHeader from '../template/pageHeader'
import LojaList from './LojaList';
import Carousel from '../template/carousel';
import Grid from '../template/grid'

const URL = 'http://localhost:3003/api/produtos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(res => this.setState({ ...this.state, list: res.data }))
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <Grid cols="12 12 9 9">
                            <Carousel />
                            <IconButton style='info' icon='search' />
                            <LojaList list={this.state.list}
                            />
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}