import React, { Component } from 'react'
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
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(res => this.setState({ ...this.state, list: res.data }))
    }
    handleRemove(rowKeys) {
        let id = rowKeys
        id.map(id => {
            axios.delete(`${URL}/${id}`)
                .then(res => this.refresh())
                .catch(er => console.log(er))
        })
    }
    handleClear() {
        this.refresh()
    }

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

    handleUpdate(rowKeys, cellName, data) {
        let id = rowKeys
        switch (cellName) {
            case 'preco':
                axios.put(`${URL}/${id}`, {
                    preco: data
                })
                    .then(res => console.log(res))
                break;
            case 'nomeProduto':
                axios.put(`${URL}/${id}`, {
                    nomeProduto: data
                })
                    .then(res => console.log(res))
                break;
            case 'foto':
                axios.put(`${URL}/${id}`, {
                    foto: data
                })
                    .then(res => console.log(res))
                break;
            case 'description':
                axios.put(`${URL}/${id}`, {
                    description: data
                })
                    .then(res => console.log(res))
                break;
        }

    }

    render() {
        return (
            <div className='container'>
                <AddProducts
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleClear={this.handleClear}

                    preco={this.state.preco}
                    nomeProduto={this.state.nomeProduto}
                    foto={this.state.foto}
                    description={this.state.description}

                />
                <hr />
                <ListProducts
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleUpdate={this.handleUpdate}
                />

            </div>
        )
    }

}
