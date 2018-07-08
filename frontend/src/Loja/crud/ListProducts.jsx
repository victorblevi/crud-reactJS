import React, { Component } from 'react'
import Grid from '../../template/grid';
import IconButton from '../../template/IconButton'
import ReactTable from "react-table";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

export default class ListProducts extends Component {

    constructor(props) {
        super(props)
        this.onAfterDeleteRow = this.onAfterDeleteRow.bind(this)
        this.createCustomDeleteButton = this.createCustomDeleteButton.bind(this)
        this.onAfterSaveCell = this.onAfterSaveCell.bind(this)
        this.onBeforeSaveCell = this.onBeforeSaveCell.bind(this)
    }
    onAfterSaveCell() {
        alert('Alteração Feita Com sucesso!')
      }
      
    onBeforeSaveCell(row, cellName, cellValue) {
        let alterar = confirm('Tem certeza que quer fazer essas alterações?')
        alterar ? this.props.handleUpdate(row._id, cellName, cellValue) : console.log('false')
    }
    
    onAfterDeleteRow(rowKeys) {
        this.props.handleRemove(rowKeys)
    }
    createCustomDeleteButton(onBtnClick) {
        return (<div className="btn-group btn-group-md">
               <IconButton style='danger' name='Remover' icon='trash-o' onClick={ onBtnClick }
                />
                </div>)
    }

    render() {

        const selectRowProp = {
            mode: 'checkbox'
        }
        const options = {
            deleteText: 'Você quer realmente remover este produto?',
            afterDeleteRow: this.onAfterDeleteRow,
            deleteBtn: this.createCustomDeleteButton,
           
        }
        const cellEditProp = {
            mode: 'click',
            blurToSave: true,
            beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
            afterSaveCell: this.onAfterSaveCell  // a hook for after saving cell
        }
        const getCaret = direction => {
            if (direction === 'asc') 
                    <span> <i className="fa fa-sort-asc" aria-hidden="true" /></span>
            if (direction === 'desc')
                    <span> <i className="fa fa-sort-desc" aria-hidden="true" /></span>
            return
                <span> <i className="fa fa-sort" aria-hidden="true" /></span> 
        }
        const priceFormatter = (cell, row) => {
            return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
        }

        return (
            <div className='row'>
                <Grid cols='12 12 12 12'>
                    <BootstrapTable data={this.props.list} bordered={true}
                        search={true} deleteRow selectRow={selectRowProp}
                        options={options} cellEdit={ cellEditProp } striped hover condensed>
                        <TableHeaderColumn
                            dataField="_id"
                            isKey hidden>
                            Id
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="nomeProduto"
                            dataSort={true}
                            width='100'
                            caretRender={getCaret}
                            columnTitle>
                            Produto
                        </TableHeaderColumn>

                        <TableHeaderColumn
                            dataField="preco"
                            width='100'
                            dataSort={true}
                            caretRender={getCaret}
                            columnTitle
                            dataFormat={priceFormatter}
                        >
                            Preço
                        </TableHeaderColumn>

                        <TableHeaderColumn
                            width='550'
                            dataField="description"
                            columnTitle>
                            descricao
                        </TableHeaderColumn>
                    </BootstrapTable>
                </Grid>
            </div>
        )
    }
}


