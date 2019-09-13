// * Importing our reqs
var env = process.env.NODE_ENV || 'development';
var config = require("../config")[env];

// * Global arr for storing artists
var userFavorites = [];

// * Function to get favorite artists from the DB
function getArtists(){
    console.log("Getting artists from favorites");
    var query = config.query(
        "SELECT * FROM favorites", function(err, res){
            if(err) throw err;
            // TODO: Add search functionality to the page
            // * Filter out if the user has no favorite artists
            if(res = "undefined"){ // ! The "undefined" may need to be adjusted to match the code, unsure what it'll send
                // TODO: Allow the user to add artists
            }

            // * Creating a for loop to store the favorite artists
            for(let i = 0; i < res.length; i++){
                userFavorites[i] = res[i];
                // TODO: Send the arr to the API calls
                // TODO: Send the artists to the list on homepage
            }
        }
    )
}

function addArtists(){
    console.log("Add artists...");
    var query = config.query(
        "INSERT INTO favorites SET ?",
        {
            // TODO: get the search box query.
            // TODO: Pass the searchbox query to the APIs and the favorites list
        }
    )
};


function logout(){
    // TODO: Upon clicking logout, redirect to "/logout/" which will then redirect back to "/" (Landing page)
};

module.exports = function(app){
    app.get("/"), function(req, res){
        res.render("index")
    }
};


// * Creating functions for the API calls

// * Spotify API
function spotifyAPI(userFavorites){
    const spotifyID = {
        id: "520a7273452546879b3b85f62e8b9939",
        secret: "2d59e1d6dd5a40b3a291fe29a18aaa3c"
    };

    let spotify = new spotify(spotifyID);

    spotify.search( {type: "artist", query: userFavorites,} ).then(function(response){
        console.log(response);
    });
};

function lastFM(userFavorites){
    var artist = userFavorites;
    var queryURLFM = "https://cors-anywhere.herokuapp.com/http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + userFavorites + "&api_key=23918b643329567603dcdf46fc1c0e88&format=json";

    $.ajax({
        url: queryURLFM,
        method: "GET"
    }).then(function(data){
        console.log(data);
    });
};

function bandsInTown(userFavorites){
    const bandsInTownAPIKey = "codingbootcamp";
    const queryURLBIT = "https://rest.bandsintown.com/artists/"+ userFavorites +"/events?app_id="+ bandsInTownAPIKey;

    var userLocation;

    axios.get(queryURLBIT).then(
        function(response){
            for(let i = 0; i < response.data.length; i++){
                console.log("--------------------------");
                console.log("Date: "+ response.data[i].datetime);
                console.log("Location: "+ response.data[i].venue.country);
                console.log("Venue name: "+ response.data[i].venue.name);
                console.log("---------------------------");
            }
            // * Find the user location in the arr
            if(response.data[i].venue.country.find(userLocation)){
                console.log("Artist playing in your city!");
            };
        });
}

function getAllInfo(userFavorites){
    for(let i = 0; i < userFavorites.length; i++){
        // TODO: Go through all API function calls and append to div
    }
}