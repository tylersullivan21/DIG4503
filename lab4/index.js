const Express = require("express");
const App = Express();
const port = 8080;
const Person = require("./Pokemon");
const faker = require("faker");

App.get('/', function(request,response){
    response.send("Hello World!");
})

App.listen(port,() => {
    console.log("Server is running");
})