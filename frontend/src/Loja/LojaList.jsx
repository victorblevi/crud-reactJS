import React from 'react'
import IconButton from '../template/IconButton';
import Card from '../template/Card'
import Grid from '../template/grid'


export default props => {

    const renderCards = () => {
        const list = props.list || []
        return list.map(produto => (

            <Card
                key={produto._id}
                name={produto.nomeProduto}
                src={produto.foto}
                preco={produto.preco}
                desc={produto.description}>
                <div style={{ textAlign: 'center' }}>
                    <IconButton style='primary btn-block btn-lg' name='COMPRAR' />
                </div>
            </Card>
        ))
    }

    return (
        <div className='container'>
            <div className='row' style={{ paddingBottom: '10em' }}>
                {renderCards()}
            </div>
        </div>
    )
}

