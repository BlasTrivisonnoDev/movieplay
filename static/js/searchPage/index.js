function showResults(){
    

    const search = document.querySelector('.input-search').value
    
    // busca las coincidencias con la busqueda y devuelve la información

    conexion(`search/movie?query=${search}`).then((data) => {
        const peliculas = data.results
        // console.log(peliculas)

        if (peliculas==0){
            // containerHome.classList.add("see")
            // location.hash="Home"  
            // alert('pelicula no encontrada')
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pelicula no encontrada',
            showConfirmButton: false,
            timer: 2000
            })
            // cuando se termine de  mostrar la alerta
            .then((result) => {
                location.hash="Home"  

              })
            
            
        }

        else{

            structureBasic()
            
            let title=search.charAt(0).toUpperCase() + search.slice(1); // pone en mayuscula la  primera letra
                   
            const containerTitleSearch= document.querySelector(".title-container-search h2")
            containerTitleSearch.textContent=title

           structureMovies(peliculas)
        }        
    })
}

// estructura básica de los resultados de la página de buscar

function structureBasic(){
    main.innerHTML=`
    <section class="container-movies-search ">
        <div class="title-container-search">
        <h2 class="title"></h2>
        <div class="containerMovies container-search-movies">
        <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
            <div class="scrollLoading"></div>
        </div>
    </section>
    `   

}


function structureMovies(peliculas){
    const containerMovieSearch = document.querySelector('.container-search-movies');
    containerMovieSearch.innerHTML = ''
    
    peliculas.forEach(pelicula => {

        const {poster_path,id}= pelicula
        console.log(poster_path)
        const url = `https://image.tmdb.org/t/p/w200${poster_path}`
        const div = document.createElement('div')
        div.classList.add('container-movie')
        div.innerHTML = `<img src="${url}" alt="Imagen ${id}" onclick="imgSeleccionada(${id})">`
        
        containerMovieSearch.appendChild(div)

    })
}


export {showResults}