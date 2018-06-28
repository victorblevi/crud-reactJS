import React from 'react'

export default function getCaret(direction, props) {
    if (direction === 'asc')
        <span> <i className="fa fa-sort-asc" aria-hidden="true" /></span>

    if (direction === 'desc')
        <span> <i className="fa fa-sort-desc" aria-hidden="true" /></span>
    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    )
}

export function buttonFormatter(props) {
    return (
        <section className='row'>
            <Grid cols='12 12 12 12'>
                <IconButton style="warning btn-lg" icon="edit" name=" Edit" />
                <IconButton style="danger btn-lg" icon="trash" name=" Remove" onClick={this.handleRemove} />
            </Grid>
        </section>
    )
}


export function priceFormatter(cell, row) {
    return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
} 