import React, { Component } from 'react'

import Grid from '../template/grid'
import IconButton from '../template/IconButton'
import AddProducts from './crud/AddProducts'
import axios from 'axios'
import ListProducts from './crud/ListProducts'

const URL = 'http://localhost:3003/api/produtos'

export default class Crud extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            preco: 0,
            nomeProduto: '',
            foto: '',
            description: '',
        }
        this.refresh()
        this.handleRemove = this.handleRemove.bind(this)
/*         this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this) */
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(res => this.setState({ ...this.state, list: res.data }))
    }
    handleRemove(rowKeys) {
        alert('sou handle')
        axios.delete(`${URL}/${rowKeys}`)
            .then(res => this.refresh())
            .catch(er => console.log(er))
    }

/*     openModal() {
        this.setState({ open: true });
    }

    closeModal() {
        this.setState({ open: false });
    } */

    handleAdd() {
        const preco = this.state.preco
        const nomeProduto = this.state.nomeProduto
        const foto = this.state.foto
        const description = this.state.description
        axios.post(URL, { preco, nomeProduto, foto, description })
            .then(res => console.log('produto adicionado com sucesso!!'))
            .catch(er => console.log(er))
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        console.log(change);
        this.setState(change)
    }

    render() {
        return (
            <div>
                <AddProducts
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    
                    preco={this.state.preco}
                    nomeProduto={this.state.nomeProduto}
                    foto={this.state.foto}
                    description={this.state.description}
                />

                <ListProducts
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                />

            </div>
        )
    }

}
