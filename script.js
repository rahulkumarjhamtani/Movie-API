var key = "3a0a21f9923f5784f52211f34862c067";
var baseURL = "https://api.themoviedb.org/3/search/movie";

// function findMovie(event) {
//   event.preventDefault();

//   var movie = document.getElementById("movie").value;
//   console.log("Movie = ", movie);

//   var url = `${baseURL}?api_key=${key}&query=${movie}`;

//   console.log(url);
// }

async function findMovie() {
  // Making an API call (request) and getting the response back

  var movie = document.getElementById("movie").value;

  var url = `${baseURL}?api_key=${key}&query=${movie}`;
  console.log(url);

  const response = await fetch(url);

  // Parsing it to JSON format
  const data = await response.json();
  console.log(data.results);

  console.log(data.results[0].backdrop_path);
  console.log(baseURL + data.results[0].poster_path);

  var string = "";

  for (var i = 0; i < data.results.length; i++) {
    if (data.results[i].poster_path) {
      var imgsrc =
        "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

      string +=
        "<div style='border:1px solid black;padding:20px;width:80%;margin:auto;margin-top: 30px;height:360px'>" +
        "<img src=" +
        imgsrc +
        " style='margin-right:20px;width:220px;height:300px;'><br>" +
        "<h2>" +
        data.results[i].original_title +
        "</h2><br>" +
        "<i>Released on " +
        data.results[i].release_date +
        "</i><br>" +
        "<p>" +
        data.results[i].overview +
        "</p><br>" +
        "<span>Popularity: " +
        data.results[i].popularity +
        "</span><br>" +
        "<span>Rating: " +
        data.results[i].vote_average +
        "</span></div>";

      console.log(data.results[i].original_title);
    }
  }

  document.getElementById("showList").innerHTML = string;
}
