function moviesParticipe(id){
    // obtener las peliculas donde es participe la persona 
    conexion(`person/${id}/movie_credits`).then((data)=>{
        const movies = data.cast
        const containerMovies = document.querySelector('.container-known-for-movies')
        
        movies.forEach(movie => {
            const {title, poster_path, id} = movie
            const url = `https://image.tmdb.org/t/p/w200${poster_path}`
            const div = document.createElement('div')
            div.classList.add('container-movie')
            div.innerHTML = `<img src="${url}"  onerror="this.src='https://cdn-icons-png.flaticon.com/512/4380/4380656.png';"  alt="Imagen ${title} " onclick="imgSeleccionada(${id})">`
            containerMovies.appendChild(div)
        })
    }
    )

}

export {moviesParticipe}