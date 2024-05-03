import { structureHome } from "../js/Home/structureHome.js"
import { sliderMoviesPopular } from "../js/Home/sliderMoviesPopular.js"
import { moviesTrending } from "../js/Home/moviesTrending.js"
import { tvTrending } from "../js/Home/tvTrending.js"
import { upcomingMovies } from "../js/Home/upcomingMovies.js"
import { categories } from "../js/Home/categories.js"
function Home(){

    structureHome() // crea la estructura del home

    // // mostrar los datos
    sliderMoviesPopular()
    moviesTrending()
    tvTrending()
    upcomingMovies()
    categories()



}

export {Home}