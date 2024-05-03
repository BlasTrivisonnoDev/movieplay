import { scroll } from "../../utils/scroll.js"

function tvTrending(){
// obtiene las tv destacadas del dia
    conexion('trending/tv/day').then((data) => {
        // crea la estructura de scroll y  lo ingresa en el container
        const containerTrendingTV= document .querySelector('.container-trending-tv' );

        scroll(data,containerTrendingTV,'tv')
        })

}

export {tvTrending}