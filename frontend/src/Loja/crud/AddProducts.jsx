import React from 'react'
import IconButton from '../../template/IconButton';
import Grid from '../../template/grid';

export default props => (

    <div className='container'>
        <div className='row'>
            <Grid cols='12 12 12 12'>
                <div role='form' className='todoForm'>
                    <form>
                        <legend> <h2>Adcionar Produto</h2></legend>
                        <fieldset>
                            <label>Nome Produto</label><br />
                            <input id="nome"
                                placeholder="Informe o Nome do Produto" className='form-control'
                                onChange={props.handleChange} value={props.nomeProduto} name='nomeProduto'></input>
                            <label>Preço Produto</label><br />
                            <input id="preco" placeholder="Informe o Preço do Produto" className='form-control' onChange={props.handleChange} value={props.preco} name='preco'></input>

                            <label>Descrição</label><br />
                            <input id="foto" placeholder="Descrição" className='form-control' onChange={props.handleChange} name='description'></input>

                            <label>URL Foto Produto</label><br />
                            <input id="foto" placeholder="Informe o URL da Foto do Produto" className='form-control' onChange={props.handleChange} name='foto'></input>
                        </fieldset>
                        <div style={{ paddingTop: '2em', textAlign: 'right' }}>
                            <IconButton style='secondary btn-lg' name='Cancelar ' icon='cancel' />
                            <IconButton style='primary btn-lg' name='Adcionar ' icon='plus'
                                onClick={props.handleAdd} />
                        </div>
                    </form>
                </div>
            </Grid>
        </div>
        <hr />
    </div>
   

)





