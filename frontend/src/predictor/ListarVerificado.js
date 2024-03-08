import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:3002/predictor/listar_verificador'

const ListarVerificado = () => {

    const [verficados, setVerificados] = useState([])

    useEffect(() => {
      obtenerVerificados()
    }, [])
    
    const obtenerVerificados = async () => {
        const listado = await axios.get(URI)
        setVerificados(listado.data)
    }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
            <Link to="/crear" className='btn btn-primary mt-2 mb-2'> <i className="fa-solid fa-circle-plus"></i> Verificar</Link>
            <table className='table'>
                <thead className='table-primary'>
                    <tr>
                        <th>Placa</th>
                        <th>Fecha</th>
                        <th>¿Puede circular este Vehículo?</th>
                    </tr>
                </thead>
                <tbody>
                    {verficados.map((verificado) => (
                        <tr key={verificado.id}>
                            <td>{verificado.placa}</td>
                            <td>{verificado.fecha}</td>
                            <td>{verificado.mensaje_circulacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default ListarVerificado
