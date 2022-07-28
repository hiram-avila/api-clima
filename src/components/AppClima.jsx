
import {useContext} from 'react'
import ClimaContext from '../context/ClimaProvider'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'

const AppClima = () => {

 const {resultado, cargando} = useContext(ClimaContext)

  return (
    <>
        <main className='dos-columnas'>
            <Formulario />

            {cargando ? <Loading /> :
            resultado?.name && <Resultado />}
            
            

        </main>

    </>
  )
}

export default AppClima