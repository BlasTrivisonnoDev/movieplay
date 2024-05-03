import { scroll } from "../../utils/scroll.js";

function moviesTrending(){

    // obtiene las  peliculas destacadas del dia
    conexion('trending/movie/day').then((data) => {
        // crea la estructura de scroll y  lo ingresa en el container
        const containerTrendingMovies= document .querySelector('.container-trending' );
        scroll(data,containerTrendingMovies)

    })

}

export  {moviesTrending}