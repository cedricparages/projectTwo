/* eslint-disable prettier/prettier */
$(document).ready(function(){
// Get references to page elements
var $userEmail = $("#userEmail");
var $userPassword = $("#userPassword");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
    saveExample: function(example) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/signup",
            data: JSON.stringify(example)
        });
    },
        login: function(){
            return $.ajax({
                url: "/homepage",
                type: "GET"
            })
        }
};


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
    event.preventDefault();
    console.log('hi');
    var example = {
        email: $userEmail.val().trim(),
        password: $userPassword.val().trim()
    };

    console.log(example);

    if (!(example.email && example.password)) {
        alert("You must enter an example text and description!");
        return;
    }

    API.saveExample(example).then(function(){
        window.location.href="/profile";
    })

    $userEmail.val("");
    $userPassword.val("");
};

var handleLoginSubmit = function(event) {
    event.preventDefault();

    var example = {
        email: $userEmailt.val().trim(),
        password: $userPassword.val().trim()
    };

    console.log(example);

    if(!(example.email && example.password)){
        alert("Please enter a password and email");
        return;
    }

    API.login(example).then(function(){
        refreshExamples();
    });
}

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
        .parent()
        .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
        refreshExamples();
    });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

});