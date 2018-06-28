import React, { Component } from 'react'
import Grid from '../../template/grid';
import IconButton from '../../template/IconButton'
import ReactTable from "react-table";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true" /></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true" /></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    )
}

const priceFormatter = (cell, row) => {
    return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
}

function onAfterDeleteRow(rowKeys) {
    alert('The rowkey you drop: ' + rowKeys);

}

const options = {
    afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};


export default class ListProducts extends Component {

    constructor(props) {
        super(props)

    }
    onAfterDeleteRow(rowKeys) {
        alert('The rowkey you drop: ' + rowKeys);

    }

    render() {
        return (
            <div className='row'>
                <Grid cols='12 12 12 12'>
                    <BootstrapTable data={this.props.list} bordered={true} search={true} deleteRow={true} selectRow={selectRowProp}  /* options={option}  */ striped hover condensed>
                        <TableHeaderColumn
                            dataField="_id"
                            isKey hidden>
                            Id
                    </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="nomeProduto"
                            dataSort={true}
                            width='50'
                            caretRender={getCaret}
                            columnTitle>
                            Produto
                    </TableHeaderColumn>

                        <TableHeaderColumn
                            dataField="preco"
                            width='90'
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

                        <TableHeaderColumn
                            width='180'
                        // dataFormat={buttonFormatter}
                        >
                            Editar/Exluir
                    </TableHeaderColumn>
                    </BootstrapTable>
                </Grid>
            </div>
        )
    }
}


