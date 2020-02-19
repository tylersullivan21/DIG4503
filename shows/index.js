const Express = require("express");
const App = Express();
const port = 80;
const fs = require("fs");

let contents = fs.readFileSync("database");


App.get("/shows/name/:name", () => {
    
});

App.get("/shows/score/:score", () => {
    
});

App.get("/shows/episode/:episode", () => {
    
});


App.listen(port, () => {

});