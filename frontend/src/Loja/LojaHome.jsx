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
            <div className='container containerBox'>
                <div className="row">
                    <Grid cols="12 12 12 12">
                        <Carousel />
                        <div style={{paddingTop: 3 +'em'}}>
                            <LojaList list={this.state.list} />
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}