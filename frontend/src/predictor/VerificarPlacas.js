import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const URI = 'http://localhost:3002/predictor/verificador'

const VerificarPlacas = () => {

    const [placa, setPlaca] = useState('')
    const [fecha, setFecha] = useState('')

    const navigate = useNavigate()

    const crear = async (e) => {
        e.preventDefault()
        await axios.post(URI, { placa, fecha })
        navigate('/')
    }

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header'>Crear Placa</div>
                        <div className='card-body'>
                            <form onSubmit={crear}>
                                <div className='mb-3'>
                                    <label className='form-label'>Placa: </label>
                                    <input
                                        value={placa}
                                        onChange={(e) => setPlaca(e.target.value)}
                                        type='text'
                                        className='form-control'
                                        placeholder='Ejm: IBF-8797'
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Fecha: </label>
                                    <input
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                        type='text'
                                        className='form-control'
                                        placeholder='Ejm: 2024-02-01'
                                    />
                                </div>

                                <button type='submit' className='btn btn-success'>Verificar</button>
                                <Link to={'/'} className='btn btn-danger'>Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificarPlacas
