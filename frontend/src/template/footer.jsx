import React from 'react'
import Grid from './grid';


export default props => (
    <footer>
        <div>
            <div className='row'>
                <Grid cols='12 12 4 4'>
                    <h2>Formas de Pagamentos</h2>
                    <picture>
                        <img src='https://image.ibb.co/dV8rGd/Untitled2.png' alt='formas de pagamentos' />
                    </picture>
                </Grid>

                <Grid cols='12 12 4 4'>
                    <h2>Formas de Pagamentos</h2>
                </Grid>

                <Grid cols='12 12 4 4'>
                    <h2>Contato</h2>
                    <p>(11)4444-4444</p>
                </Grid>
            </div>
        </div>
    </footer>
)

