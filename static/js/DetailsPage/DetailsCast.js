import  {scroll} from '../../utils/scroll.js'

function DetailsCast (data){

    const datosCast = data.cast
    console.log(datosCast)

        if (datosCast.length<=0){
            console.log('no hay actores')
        }

        else{

            const divCarousel = document.createElement('div')
            const divCast= document.createElement('div')

            divCast.classList.add('container-cast')
            divCarousel.classList.add('snap')
            divCarousel.classList.add('carousel')

            // Agrega titulo al container
            const title= document.createElement('h2')
            title.textContent='Actors'
            title.classList.add('title-cast')
            divCast.appendChild(title)
            
            const containerDetails = document.querySelector('.container-details');
            containerDetails.appendChild(divCast)
            divCast.appendChild(divCarousel)

            scroll(datosCast,divCarousel,'actor')
        }
}

export {DetailsCast}