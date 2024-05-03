function Recomend(data,tipo){
    console.log(data)
    if (data.results.length==0){
        console.log('no hay recomendadas')
        
    }
    else{
        const div = document.createElement('div')
        div.classList.add('container-recomendadas')
            
        div.innerHTML = `
        <h2 id="title-recomendadas">Related Movies</h2>
        <div class="containerRelated containerMovies">
        </div>
        `
        const containerDetails = document.querySelector('.container-details');

        containerDetails.appendChild(div)

        const containerRecomendadas = document.querySelector('.containerRelated')

        const peliculas = data.results
        
        peliculas.forEach(pelicula => {
            
            const {poster_path,id}= pelicula

            const url = `https://image.tmdb.org/t/p/w200${poster_path}`
            const div = document.createElement('div')
            div.classList.add('container-movie')
            div.innerHTML = `<img onerror="this.src='https://cdn-icons-png.flaticon.com/512/4380/4380656.png';" src="${url}" alt="Imagen ${id}" onclick="imgSeleccionada(${id},'${tipo}')">`

            containerRecomendadas.appendChild(div)
            

        })
    }
}

export {Recomend}