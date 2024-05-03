// conexion con AXIOS para el consumo de la API

const api = axios.create({
    // es la url base que tiene el API
    baseURL: 'https://api.themoviedb.org/3/',
    // con axios se pued enviar el header y los parametros por defecto
    headers: {
        'Content-Type': 'application/json',
    },
    // se tiene que confimar si la API permite recibier la api key  por parametros
    params: {
        'api_key':'504c42f0b0b8db2ff20da3ec94097fe2',
    },

})


async function conexion(endpoint){
    const response = await api.get(endpoint)
    const data = response.data
    return data
} 



