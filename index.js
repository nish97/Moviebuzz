
const searchElement = document.querySelector(".search_query");
const moviePoster = document.querySelectorAll(".poster_img");
const movieTitle = document.querySelectorAll(".movie_title");
const movieOverview = document.querySelectorAll(".movie_overview");
const apiKey = "6bfaf526eab3a7d1a3f30c4bd683a1b0";
const youtubeViewer = document.querySelector("#trailer");
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=6bfaf526eab3a7d1a3f30c4bd683a1b0")
  .then(response => { return response.json(); })
  .then( data =>{
    console.log(data);
    data.results.forEach( (element,index) => {
      moviePoster[index].setAttribute("src","https://image.tmdb.org/t/p/w342"+data.results[index].poster_path);
      moviePoster[index].setAttribute("alt",data.results[index].original_title);
      movieTitle[index].innerHTML= data.results[index].original_title;
      movieOverview[index].innerHTML= data.results[index].overview;
      if (index===0) {
        let videoFetch = "https://api.themoviedb.org/3/movie/"+data.results[index].id+"/videos?api_key=6bfaf526eab3a7d1a3f30c4bd683a1b0"
        fetch(videoFetch)
          .then(response => { return response.json(); })
          .then( data =>{
              console.log(data); 
              youtubeViewer.setAttribute("src","https://youtube.com/embed/"+data.results[0].key+"?autoplay=1&autohide=1");
              youtubeViewer.setAttribute("alt",data.results[0].name);
          });
      } 
    });
  });
//https://youtube.com/embed/ID?autoplay=1&controls=0&showinfo=0&autohide=1
