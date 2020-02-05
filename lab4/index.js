const Express = require("express");
const App = Express();
const port = 8080;
const Pokemon = require("./Pokemon");
const faker = require("faker");

App.get("/pokemon/id/:id", (req, res) => {
    people.forEach((value)=> {
        if(value.name == req.params.id) {
            res.send(value);
        }
    });

    res.send("Invalid!");

});



App.get("/pokemon/name/:name", (req, res) => {
    people.forEach((value)=> {
        if(value.color == req.params.name) {
            res.send(value);
        }
    });

    res.send("Invalid!");

});

App.listen(port,() => {
    console.log("Server is running");
})