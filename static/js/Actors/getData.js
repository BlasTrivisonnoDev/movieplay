import { showPerson } from "./showInformation.js"

function getData(){
    
    const title= document.querySelector('.title')
    title.innerHTML = `<h2> Actores </h2>`

    const container= document.querySelector('.containerMovies')

    container.innerHTML = ''


    for (let i = 1; i < 200; i++){
        conexion(`/person/popular?page=${i}`).then((data) => {
            showPerson(data)
            
        })      
    }
     
}

export {getData}