import {slider} from '../../utils/slider.js'

function sliderMoviesPopular(){
    // hace la conexión con la api y  obtiene los datos a mostrar
    conexion('movie/popular').then((data) => {

        const peliculas = data.results

        // crea la estructura de las peliculas en el slider
        structureMovieSlider(peliculas)


        const prevIcon = document.getElementsByClassName('prev')[0];
        const nextIcon = document.getElementsByClassName('next')[0];
        
        // le da la funcionalidad a los controllers
        slider(prevIcon, nextIcon)

    })

}

function structureMovieSlider(peliculas){
    const containerSlider= document .querySelector('.slideshow-container' );
    containerSlider.innerHTML=''
            
        peliculas.forEach(pelicula => {
            const {poster_path, title, id} = pelicula
            const url = `https://image.tmdb.org/t/p/w500${poster_path}`

            const div = document.createElement('div')
            div.classList.add('mySlides')
            div.classList.add('fade')
            div.innerHTML = `
                <img src="${url}" class="slider-img" alt="img ${id}" onclick="imgSeleccionada(${id})" >
            `            
            containerSlider.appendChild(div)
        
                
        });

        // Crea los controllers
        const controller=`
        <a class="prev">&#10094;</a>
        <a class="next">&#10095;</a>
        `
        // agrega los controllers al slider 
        containerSlider.insertAdjacentHTML('beforeend', controller)

}

export  {sliderMoviesPopular}