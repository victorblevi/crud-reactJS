import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import Grid from '../template/grid'
import IconButton from '../template/IconButton';
import axios from 'axios'
const URL = 'http://localhost:3003/api/produtos'

export default class CadastroProdutos extends Component {

    constructor() {
        super()
        this.state = {
            preco: 0,
            nomeProduto: '',
            foto: '',
            description: '',
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleAdd() {
        const preco = this.state.preco
        const nomeProduto = this.state.nomeProduto
        const foto = this.state.foto
        const description = this.state.description
        console.log(preco, nomeProduto, foto)
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
            <div className='container'>
                <Grid cols='12 12 12 8'>
                    <div role='form' className='todoForm'>
                        <h2>ADD PRODUCT</h2>
                        <form>
                            <fieldset>
                                <label>Nome Produto</label><br />
                                <input id="nome"
                                    placeholder="Informe o Nome do Produto" className='form-control'
                                    onChange={this.handleChange} value={this.state.nomeProduto} name='nomeProduto'></input>
                            </fieldset>
                            <fieldset>
                                <label>Preço Produto</label><br />
                                <input id="preco" placeholder="Informe o Preço do Produto" className='form-control' onChange={this.handleChange} value={this.state.preco} name='preco'></input>
                            </fieldset>
                            <fieldset>
                                <label>Descrição</label><br />
                                <input id="foto" placeholder="Descrição" className='form-control' onChange={this.handleChange} name='description'></input>
                            </fieldset>
                            <fieldset>
                                <label>URL Foto Produto</label><br />
                                <input id="foto" placeholder="Informe o URL da Foto do Produto" className='form-control' onChange={this.handleChange} name='foto'></input>
                            </fieldset>
                            <div style={{ paddingTop: '2em', textAlign: 'right' }}>
                                <IconButton style='secondary btn-lg' name='Cancelar ' icon='cancel' />
                                <IconButton style='primary btn-lg' name='Adcionar ' icon='plus'
                                    onClick={this.handleAdd} />
                            </div>
                        </form>

                    </div>
                </Grid>
            </div>
        )
    }
}



