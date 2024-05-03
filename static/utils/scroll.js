// Se encarga de hacer la estructura HTML de scroll  horzontal de peliculas
function scroll(data,container,tipo){

    container.innerHTML = ''

    if (tipo=='actor'){
        
        data.forEach(cast => {
                const {name, profile_path, id} = cast
                const url = `https://image.tmdb.org/t/p/w200${profile_path}`
                const divCast = document.createElement('div')
                divCast.classList.add('cast')
                divCast.classList.add('caroulsel')
                divCast.innerHTML = `
                <a  href="#profile=${id}"><img  onerror="this.src='https://cdn-icons-png.flaticon.com/512/4380/4380656.png';" src="${url}" class="img-cast" alt="Imagen ${name}">
                `        
                container.appendChild(divCast)
            })
    }

    else{

        const peliculas = data.results
        peliculas.forEach(pelicula => {
            const {poster_path, title, id} = pelicula
            const url = `https://image.tmdb.org/t/p/w200${poster_path}`

            const div = document.createElement('div')
            div.classList.add('caroulsel')
            // agregar el id a la pelicula
            div.setAttribute('id', id)
            div.innerHTML = `<img src="${url}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/4380/4380656.png';" alt=" img ${title}" onclick="imgSeleccionada(${id},'${tipo}')">` 
            container.appendChild(div)
        
        })
    }
    
}

export {scroll}