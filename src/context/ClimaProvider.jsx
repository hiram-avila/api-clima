import {useState, createContext} from 'react'
import axios from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {


    const [busqueda, setBusqueda] = useState({
        ciudad:'',
        pais:''
    })

    const [resultado, setResultado] = useState('')
    const [cargando, setCargando] = useState(false)

    const datosBusqueda = ( e) => {
        
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    const consultarApi = async(datos) => {
        setCargando(true)
        
        try {
            const {ciudad, pais} = datos
            const appId = import.meta.env.VITE_API_KEY

            const apiClima = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

            const {data:clima} = await axios(apiClima) 
            setResultado(clima)
            console.log(resultado)
            
            
        } catch (error) {
            console.log(error)
        } finally{

            setCargando(false)
        }

    }   

    return(
        <ClimaContext.Provider 
           value={{
            busqueda,
            datosBusqueda,
            consultarApi,
            resultado,
            cargando
           }}
        >
            {children}
        </ClimaContext.Provider>
    )

}

export {
    ClimaProvider
}

export default ClimaContext