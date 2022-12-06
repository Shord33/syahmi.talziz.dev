const API_KEY = 'api_key=c472b632532b3399f0d06df496823b74';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?' + API_KEY + '&sort_by=popularity.desc';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;
const main = document.getElementById('main');
const pageNumber = document.getElementById('pagenum');
const form = document.getElementById('form');
const search = document.getElementById('search');
var pageNum = 1;

get_movies(API_URL);
function get_movies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML =``;
    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const moviel = document.createElement('div');
        moviel.classList.add('movie');
        moviel.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${get_color(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
            ${overview}
            </div>
        `
        main.appendChild(moviel);
    })

} 

function get_color(score){
    if(score >=8){
        return 'green'
    }
    else if(score >=6){
        return 'yellow'
    }
    else if(score >=5){
        return 'orange'
    }
    else{
        return 'red'
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        get_movies(SEARCH_URL+'&query='+searchTerm)
    } else{
        get_movies(API_URL)
    }
})
function nextPage(){
    pageNum = pageNum + 1;
    get_movies(API_URL+"&page="+pageNum);
    document.documentElement.scrollTop = 0;
    pageNumber.innerHTML=`${pageNum}`;
}

function prevPage(){
    if(pageNum ==1){
        get_movies(API_URL);
        document.documentElement.scrollTop = 0;
    }
    else{
        pageNum = pageNum - 1;
        get_movies(API_URL+"&page="+pageNum);
        pageNumber.innerHTML=`${pageNum}`;
        document.documentElement.scrollTop = 0;
    }
}
