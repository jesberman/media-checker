
document.getElementById("instruction").innerHTML = "Please Enter The Title Of The Movie Or Television Show You Are Searching For";


function consoleLog() {
    title = document.getElementById("movie-input").value;
    console.log(title);


    var omdb = "http://www.omdbapi.com/?t=";
    var apiKey = "&apikey=c797a0d9";
    
    var url = omdb+title+apiKey;
    
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {

        var apiPoster = response.Poster;
        var poster = (apiPoster);

        var apiTitle = response.Title;
        var title = (apiTitle);

        var apiGenre = response.Genre;
        var genre = (apiGenre);
    
        var apiYear = response.Year;
        var year = (apiYear);
    
        var apiPlot = response.Plot;
        var plot =(apiPlot);
    
        var apiRating =response.Rated;
        var rating = (apiRating);

        var apiDirector = response.Director;
        var director = (apiDirector);
    
        var apiActors =response.Actors;
        var actors = (apiActors);

        // document.getElementById("Poster").innerHTML = poster;
        document.getElementById("Title").innerHTML = title;
        document.getElementById("Genre").innerHTML = genre;
        document.getElementById("Year").innerHTML = year;
        document.getElementById("Plot").innerHTML = plot;
        document.getElementById("Rating").innerHTML = rating;
        document.getElementById("Director").innerHTML = director;
        document.getElementById("Actors").innerHTML = actors;
        document.getElementById("Poster2").src=poster;

    });
}


