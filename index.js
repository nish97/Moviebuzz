
const searchElement = document.querySelector(".search_query");
const moviePoster = document.querySelectorAll(".poster_img");
const movieTitle = document.querySelectorAll(".movie_title");
const movieOverview = document.querySelectorAll(".movie_overview");
const iFrame = document.querySelector(".trailer");
const apiKey = "6bfaf526eab3a7d1a3f30c4bd683a1b0";
let youtubeMovieId = 0;
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=6bfaf526eab3a7d1a3f30c4bd683a1b0")
  .then(response => { return response.json(); })
  .then( data =>{
    console.log(data);
    for (var i = 0; i < data.results.length; i++) {

      moviePoster[i].setAttribute("src","https://image.tmdb.org/t/p/w342"+data.results[i].poster_path);
      moviePoster[i].setAttribute("alt",data.results[i].original_title);
      movieTitle[i].innerHTML= data.results[i].original_title;
      movieOverview[i].innerHTML= data.results[i].overview; 
        }
      }
  });

//https://youtube.com/embed/ID?autoplay=1&controls=0&showinfo=0&autohide=1