import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton'
import ReactTable from "react-table";

export default class Crud extends Component {

    render() {

        return (
            <section>
                <h1 style={{ marginTop: '6em' }}> Cadastro </h1>
                <div>
                    <IconButton style="primary btn-lg" icon="plus" name=" New" />
                    <IconButton style="danger btn-lg" icon="edit" name=" Edit" />
                    <IconButton style="warning btn-lg" icon="trash-o" name=" Delete" />
                </div>
                <div>

                </div>

            </section>

        )
    }

}
