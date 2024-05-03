function structureHome(){

    main.innerHTML =`
    <div class="container-Home">

        <!-- Slideshow container -->
        <div class="slideshow-container">
        <div class="loadSlider">

        </div>
        </div>

      
        <section class="trending-movie">

        <div class="title-container">
            <h2 class="title">Trending Movies</h2>
        </div>
        <div  class=" carousel container-trending snap">
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
        </section>

        <section class="trending-tv">

        <div class="title-container">
            <h2 class="title">Trending TV</h2>
        </div>
        <div  class=" carousel container-trending-tv snap">
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

        <section class="upcoming">
        <div class="title-container">
            <h2 class="title">Upcoming</h2>
        </div>
        <div   class="carousel container-upcoming snap">
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
    
        <section class="categories">
            <h2>Categories</h2>
            <div class="container-categories">
                <p style="
                text-align: center;
                font-size: 45px;
                margin-bottom: 50px;
                ">Cargando ...</p>
            </div>
        </section>

    </div>
    `
    
}

export  {structureHome}