import React from 'react'
import Grid from '../template/grid'

export default props => (
    <Grid cols='12 12 6 4' >
        <div className="card h-20 card-boxshadow" style={{ marginBottom: '2em', backgroundColor:'#212529'}}>
            <div style={{ margin: '10', align: 'center' }}>
                <a href="#" ><img className="card-img-top img-responsive img-adjust" src={props.src} alt={props.alt} /></a>
                <div>
                    <div className="card-body">
                        <h6 className="card-title">
                            <a href="#">{props.name}</a>
                        </h6>
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


