import { moviesParticipe } from "./moviesParticipe.js"

function getProfile(){

    const url = location.hash.slice(1).toLocaleLowerCase().split('=')[1]
    const id = url.split('-')[0]

    /*usualmente un % seguido de dos números quieren decir que un string fue codificado para formar parte de un URI,
    por cuestiones de evitar caracteres raros.
    Se recomienda usar decodeURL para quitarlo */
    conexion(`person/${id}`).then((data)=>{

        let YearNacimiento=''

        let {name, biography, profile_path, birthday, place_of_birth,} = data

        if (data.birthday==null){
            birthday=''
        }
        else{
            const [Nacimiento, _] = data.birthday.split('-'); // divide la fecha por - y obtiene el primero parametro que es el año
            YearNacimiento = Nacimiento
        }

        if(biography === ''){
            biography = 'No hay información disponible'
        }
        if(birthday === null ){
            birthday = ''
        }

        if(place_of_birth === null){
            place_of_birth = ''

        }

        
        const url = `https://image.tmdb.org/t/p/w200${profile_path}`
        
        main.innerHTML=''
        
        let container  = document.createElement('section')
        container.classList.add('profileContainer')

        container.innerHTML = `
        <div class="container-profile">
            <div class="container-img-profile">
                <img onerror="this.src='https://cdn-icons-png.flaticon.com/512/4380/4380656.png';" src="${url}" alt="Imagen ${name}">
            </div>
            <div class="container-info-profile">
                <h2>${name}</h2>

                <p class="birth-profile" >${place_of_birth} ${YearNacimiento}</p>
                <p class="biography"></p>
                
                
            </div>
        </div>
        <div class="container-known-for">
            <h2>Known For</h2>
            <div class="container-known-for-movies containerMovies">
            </div>
        </div>

        `

        main.appendChild(container)

        
        document.querySelector('.biography').innerText = biography; // para que el texto tome los saltos de  linea
        
        

        moviesParticipe(id)

    })

}

export  {getProfile}