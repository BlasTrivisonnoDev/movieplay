function showInformation(data){

    const containerMovies= document.querySelector('.containerMovies')

    const peliculas = data.results
    
    // recorre la  informacion y la muestra
    peliculas.forEach(pelicula => {
    
        const {poster_path,id}= pelicula

        const url = `https://image.tmdb.org/t/p/w200${poster_path}`
        
        const div = document.createElement('div')
        div.classList.add('container-movie')
        div.innerHTML = `<img src="${url}"  onerror="this.src='https://cdn-icons-png.flaticon.com/512/4380/4380656.png';"  alt="Imagen ${id}" onclick="imgSeleccionada(${id},'tv')">`
        
        containerMovies.appendChild(div)
    })
}

export {showInformation}