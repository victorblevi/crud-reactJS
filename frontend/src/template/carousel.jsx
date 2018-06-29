import React from 'react'

export default props => (

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="https://1.bp.blogspot.com/-IFFCNjDkwcQ/VGSDmB440KI/AAAAAAAAiO8/IDMKcz7Shh0/s1600/marcas-mudaram-logo-2014-09.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://images-americanas.b2w.io/spacey/2018/06/26/v3__18-06-27_destaque-02_tablet.png" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://images-americanas.b2w.io/spacey/2018/06/25/18-06-27_destaque-01_tablet.png" alt="Third slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Antrerior</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Proxima</span>
        </a>
    </div>
)