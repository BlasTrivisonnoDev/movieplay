
function showPerson(data){

    const container= document.querySelector('.containerMovies')


    data.results.forEach(persona => {
        
        const {profile_path,id,name}= persona

        const url = `https://image.tmdb.org/t/p/w200${profile_path}`
        const div = document.createElement('div')
        div.classList.add('container-movie')
        div.innerHTML = `<a  href="#profile=${id}"><img src="${url}" class="img-cast" alt="Imagen ${name}">`
        container.appendChild(div)

    })
    
        }

export {showPerson}