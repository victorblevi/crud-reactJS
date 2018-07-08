import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'
import '../template/shop-homepage.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import Grid from '../template/grid'
import Footer from '../template/footer'

export default props => (
    <section>
        <div className='container containerBox-primary'>
            <div className='row'>
                <Grid cols='12 12 12 12'>
                    <Menu />
                    <Routes />
                </Grid>
            </div>
        </div>
        <Footer/>
    </section>
)