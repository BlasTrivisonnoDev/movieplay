function Trailer(data){

    const trailer = data.results
        
        if (trailer.length<=0){
            console.log('no hay trailer')
        }

        else{
            const div = document.createElement('div')
            div.classList.add('container-trailer')
            div.innerHTML = `
            <h2 id="title-trailer">Trailer</h2>
            <div class="trailer">
                <iframe  src="https://www.youtube.com/embed/${trailer[0].key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            `
            const containerDetails = document.querySelector('.container-details');
            containerDetails.appendChild(div)
        }

}

export {Trailer}