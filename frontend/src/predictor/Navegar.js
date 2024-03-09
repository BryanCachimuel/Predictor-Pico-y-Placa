import React from 'react'
import { Link } from 'react-router-dom'

const Navegar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary text-white">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">Predictor Circulación</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to={'/crear'} className="nav-link active">Verificar Pico y Placa</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navegar
