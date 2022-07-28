import {useContext} from 'react'
import ClimaContext from '../context/ClimaProvider'


const Resultado = () => {
    const {resultado} = useContext(ClimaContext)
    const {main, name} = resultado

    const kelvin = 273.15

    console.log(main)


  return (

    <div className='contenedor'>
        <h2>El clima de {name} es :</h2>

        <p>
            Temperatura Actual: {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
        </p>

        <p>
            Temperatura Minima: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>

        <p>
            Temperatura Maxima: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>

    </div>
  )
}





export default Resultado