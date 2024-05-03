/* Esto para evitar llamar a las funciones automáticamente para que se ejecuten, 
sino que lo podamos borrar en el futuro y podamos en el file de navigation.js, 
llamarlas cuando location y hashchange nos avisen que estamos en la vista principal o en alguna otra vista */
// import { HomePage,categoryPage,MoviePage,DetailsMoviePage,ProfilePage,SeriesPage,PersonPage } from "./main.js";


import { Home } from "../components/Home.js" 
import { SearchPage } from "../components/SearchPage.js";
import { detailsPage} from "../components/Details.js"
import { profilePage } from "../components/ProlilePage.js";
import { categoryPage } from "../components/categoryPage.js";
import { getPopular } from "../components/SeriesPopularPage.js";
import { actors } from "../components/Actors.js";

function navigation() {
    
    
    if (location.hash.includes("Home") || (location.hash.length==0) ){

        document.title = "Home";        
        Home()

    }

    else if (location.hash.startsWith("#search")){
        document.title = "Search"
        SearchPage()   

        
    }

    else if (location.hash.startsWith("#movie") || location.hash.startsWith("#tv")){
        document.title = "Details"
        detailsPage()
    }
 

    else if (location.hash.startsWith("#profile")){
        document.title = "Profile"
        profilePage()
    }


    else if (location.hash.startsWith("#category")){
        document.title = "Category"
        categoryPage()
    }

    else if (location.hash.startsWith("#series/popular")){
        document.title = "Series"
        getPopular()
    }

    else if (location.hash.startsWith("#person/popular")){
        document.title = "Actores"
        actors()
    }

}


/* este evento no solo lo queremos llamar cuando  cambie el hash, 
tambien lo queremos llamar cuando cargue nuestra aplicación, la primera carga, 
 no solo vamos a cambiar a navigator cuando cambie el hash sino tambien cuando cargue la aplicación */

window.addEventListener('load', navigation,false);
// window.addEventListener('hashchange', navigation,false);

window.addEventListener('hashchange',()=>{  navigation()}) // cuando haya cambio en el hash , url

iconSearch.addEventListener('click',()=>{
    location.hash = '#search=' + inputSearch.value
})






















