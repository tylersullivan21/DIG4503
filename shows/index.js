const Express = require("express");
const App = Express();
const port = 80;
const fs = require("fs");


let contents = fs.readFileSync("database");

const cors = require("cors");
App.use(cors());

App.get("/shows/name/:name", (req,res) => {
    let result = {"error": "Could not find name!"}

    res.json(result);
});

App.get("/shows/score/:score", () => {
    let result = {"error": "Could not find score!"}

    res.json(result);
    
});

App.get("/shows/episode/:episode", () => {
    let result = {"error": "Could not find episode in the count!"}

    res.json(result);
});


App.listen(port, () => {

});