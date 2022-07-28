import React, { useState, useContext } from 'react'
import ClimaContext from '../context/ClimaProvider'

const Formulario = () => {

    const [alerta, setAlerta] = useState('')
    
    const { busqueda, datosBusqueda, consultarApi } = useContext(ClimaContext);

    const {ciudad, pais} = busqueda;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Campos obligatorios')
            return 
        }
        consultarApi(busqueda)

    }

  return (
    <div className='contenedor'>
        {alerta && <p>{alerta}</p>}

        <form onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    id='ciudad'
                    name='ciudad'
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>

            <div className='campo'>
                <label htmlFor="pais">Pais</label>
                <select id='pais' name='pais' onChange={datosBusqueda} value={pais}>
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <input
                 type="submit" 
                 value="consultar clima"
            />
        </form>
    </div>
  )
}

export default Formulario