// TMDB Movie API
const API_KEY = "api_key=ec332d19e6fed067df0160ce34067cc4"; // API Key
const BASE_URL = "https://api.themoviedb.org/3";
// const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`; // Template literal
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const main = document.getElementById("main");

// Function Declaration
// function getMovies(url) {
// 	fetch(url)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 		});
// }
// getMovies(API_URL);

// Arrow Function
const getMovies = (url) => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			showMovies(data.results);
		});
};
getMovies(API_URL);

function showMovies(data) {
	main.innerHTML = "";

	data.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie; //Object Destructuring.
		const movieElement = document.createElement("div");
		movieElement.classList.add("movie");
		movieElement.innerHTML = `
        <img src="${IMAGE_URL + poster_path}" alt="${title}" /> 
			
        <div class="movie-info">
			<h3>${title}</h3>
			<span class="${getColor()}">${vote_average}</span>
		</div>
				
        <div class="overview">
			<h3>Overview</h3>
				${overview}
		</div>
        `;
		main.appendChild(movieElement);
	});
}

// Function to change the vote color
function getColor(vote) {
	vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
}
