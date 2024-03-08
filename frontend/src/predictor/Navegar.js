import React from 'react'
import { Link } from 'react-router-dom'

const Navegar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">Predictor Circulación</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to={'/'} className="nav-link active" aria-current="page">Inicio</Link>
                            <Link to={'/crear'} className="nav-link">Verificar Predictor</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navegar
