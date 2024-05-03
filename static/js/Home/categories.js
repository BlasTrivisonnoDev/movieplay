function categories() {
    // obtiene los generos
    conexion('genre/movie/list').then((data) => {

        const containerCategories= document .querySelector('.container-categories' );

        containerCategories.innerHTML = ''

        const categorias = data.genres

        structureGenres(categorias,containerCategories)


        

    })

}

function structureGenres(categorias,container){
    categorias.forEach(categoria => {
        const { name, id } = categoria

        const div = document.createElement('div')
        div.classList.add('category')
        div.setAttribute('id', id)
        div.innerHTML = `<p>${name}</p>`
        container.appendChild(div)

        div.addEventListener('click', () => {
            location.hash = `#category=${id}-${name}`
        })

    })
}

export { categories }