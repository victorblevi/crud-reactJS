import React from 'react'
import Grid from '../template/grid'

export default props => (
    <Grid cols='12 12 4 4' >
        <div className="card h-80" style={{ marginBottom: '2em', backgroundColor:'#212529'}}>
            <div style={{ margin: '10' }}>
                <a href="#" ><img className="card-img-top img-responsive image-product" src={props.src} alt={props.alt} /></a>
                <div>
                    <div className="card-body" style={{ paddingLeft: '3em' }}>
                        <h4 className="card-title">
                            <a href="#">{props.name}</a>
                        </h4>
                        <h5>R$ {props.preco.toFixed(2).replace('.',',')}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                    <div className="card-footer" style={{ padding: 0 }}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </Grid>
)


