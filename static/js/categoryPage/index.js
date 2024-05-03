import {ImagenesSeguidas } from "./ImagenesSeguidas.js"
import { structure } from "./structure.js"
function ShowMoviesCategory(){

    structure()

    const url = location.hash.slice(1).toLocaleLowerCase().split('=')[1]
    const id = url.split('-')[0]
    /*usualmente un % seguido de dos números quieren decir que un string fue codificado para formar parte de un URI,
    por cuestiones de evitar caracteres raros.
    Se recomienda usar decodeURL para quitarlo */
    let name = decodeURI(url.split('-')[1])

    const Name= name.charAt(0).toUpperCase() + name.slice(1);  // pone en mayuscula la  primera letra

    conexion(`discover/movie?with_genres=${id}`).then((data) => {
        ImagenesSeguidas(data)
    })

    const cointainerTitle=document.querySelector(".title-container-category")

    cointainerTitle.innerHTML = `<h2>${Name}</h2>`

}

export {ShowMoviesCategory}