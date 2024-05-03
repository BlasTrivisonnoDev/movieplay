import { showInformation } from "./showInformation.js"

function getData(){
    const containerMovies= document.querySelector('.containerMovies')
    containerMovies.innerHTML = ''

    const title= document.querySelector('.title')
    title.innerHTML = `<h2> Series TV</h2>`
    // conexion(`tv/popular`).then((data) => {
        
    //     showInformation(data)

    // })
    for (let i = 1; i < 100; i++){
        conexion(`tv/popular?page=${i}`).then((data) => {
            showInformation(data)

            
        })
    }   
}

export {getData}