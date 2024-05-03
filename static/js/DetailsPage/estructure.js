import  {DetailsCast} from './DetailsCast.js';
import  {Trailer} from './Trailer.js';
import  {Recomend} from './Recomend.js';

function EstructureInformationDetails(data,tipo){

    main.innerHTML=''


    let datos={
            'name': '',
            'tagline':'',
            'first_air_date': '',
            'duracion':'',    
    }


    if (tipo=='tv'){

        
        datos.name=data.name
        datos.tagline=data.last_episode_to_air.overview
        datos.first_air_date= data.first_air_date
        datos.duracion=data.last_episode_to_air.runtime
        
    }

    else if (tipo=='movie'){
        

        datos.name=data.title
        datos.tagline=data.tagline
        datos.first_air_date= data.release_date
        datos.duracion=data.runtime

    }

    const [year, _] = datos.first_air_date.split('-'); // divide la fecha por - y obtiene el primero parametro que es el año

    
    const url = `https://image.tmdb.org/t/p/w500${data.poster_path}`

    const section = document.createElement('section')
    section.classList.add('container-details')

    section.innerHTML= `
            <div class="information-main">
                <div class="img-poster">
                    <img src="${url}" alt="Imagen ${datos.name}">
                </div>
                <div class="information">
                    <h2 class="title-detail">${datos.name}</h2>
                    <p class="tagline">${datos.tagline}</p>
                    <div class="details"> 
                        <div class="details_votes">
                            <svg width="28" height="20" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#E13C2F"/>
                            </svg>
                            <p class="vote">${data.vote_average.toFixed(1) * 10}% </p>
                        </div>
                        <p class="duracion">${datos.duracion} min </p>
                        <p class="date">${year}</p>
                    
                    </div>
                    <div class="generosMovieDetail">
                        <h2 class="category-title">Categories</h2>
                        <div class="containerCategoriesMovieDetail">
                        </div>
                    </div>
                    <p class="description">${data.overview }</p>
                </div>
            </div>`


    main.appendChild(section)

    // Recorre los generos y  los muestra
    data.genres.forEach(genre =>{
        const {name,id} = genre
        const genero = document.createElement('a') 
        genero.classList.add('genero')
        genero.textContent = name
        genero.href = `#category=${id}-${name}`
        const contenedorGeneros= document.querySelector('.containerCategoriesMovieDetail')
        contenedorGeneros.appendChild(genero)
        
    })


    conexion(`${tipo}/${data.id}/credits`).then((data)=>{
            DetailsCast(data)
    })
    conexion(`${tipo}/${data.id}/videos`).then((data)=>{
            Trailer(data)
    })

    conexion(`${tipo}/${data.id}/recommendations`).then((data)=>{

        Recomend(data,tipo)

    })
    

}

export  {EstructureInformationDetails}