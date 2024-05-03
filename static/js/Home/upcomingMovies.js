import  { scroll}  from '../../utils/scroll.js'

function upcomingMovies(){

    conexion(`movie/upcoming`).then((data) => {
        const containerUpcoming= document .querySelector('.container-upcoming' );
        // crea la estructura de scroll en el contenedor
        scroll(data,containerUpcoming)
        })

}

export {upcomingMovies}