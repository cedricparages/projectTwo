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
            };
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
}

function logout(){
    // TODO: Upon clicking logout, redirect to "/logout/" which will then redirect back to "/" (Landing page)
}

module.exports = function(app){
    app.get("/"), function(req, res){
        res.render("index")
    }
};