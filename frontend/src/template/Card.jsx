import React from 'react'
import Grid from '../template/grid'

export default props => (
    <Grid cols='12 8 6 6' >
        <div className="card h-80" style={{ marginBottom: '2em' }}>
            <div style={{ margin: '10' }}>
                <a href="#" ><img className="card-img-top image-product" src={props.src} alt={props.alt} /></a>
                <div style={{backgroundColor: '#cccccc'}}>
                    <div className="card-body" style={{ paddingLeft: '3em' }}>
                        <h4 className="card-title">
                            <a href="#">{props.name}</a>
                        </h4>
                        <h5>{props.preco}</h5>
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


