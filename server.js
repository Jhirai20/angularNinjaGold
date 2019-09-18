//imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//config
app.use(express.static(__dirname + "/public/dist/public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//Database
mongoose.connect("mongodb://localhost/NinjaGold")
require("./server/config/mongoose.js")

//Routes
require("./server/config/routes.js")(app)

//port
app.listen(1337, function(){
    console.log("Listening on port 1337")
})

