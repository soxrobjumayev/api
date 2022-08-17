var APi_key = "63f827b9"

function getMovies(searchString) {
    return fetch(`http://www.omdbapi.com/?apikey=${APi_key}&s=${searchString}`)
    .then(response => response.json())


}
getMovies("kurtlar vadisi").then((result) => {
    rednderKINO(result.Search)
    // console.log(movies)

})


var kinorow = document.querySelector(".kino")

function rednderKINO(movies){
    kinorow.innerHTML = null
    let fragment = new DocumentFragment()
    movies.forEach(movie => {
       fragment.appendChild(createKino(movie))
    });
    kinorow.appendChild(fragment)
}

function createKino(movie){
    console.log(movie)
    let templeKino = document.querySelector("#temple")
    let kinoEl = templeKino.content.cloneNode(true)


    

    let kiboTT = kinoEl.querySelector(".title")
    kiboTT.textContent = movie.Year

    return kinoEl

}



