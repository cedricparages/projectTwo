// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");


module.exports = function(app) {

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
  
 app.get("/", function(req, res){
   console.log("Hit the route");
   res.render("index");
 })

 app.get("/login", function(req, res){
   console.log("Hit the login route");
   res.render("login");
 });

 app.get("/signup", function(req, res){
   res.render("create")
 });
   
  app.post("/signup", function(req, res){
     db.User.create({
       email: req.body.email,
       password: req.body.password
     })
   })
 });

  // Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });
// }

module.exports = router;