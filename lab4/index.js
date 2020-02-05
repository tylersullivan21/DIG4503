const Express = require('express');
const App = Express();
const port = 80;

const Person = require("./Person.js");
let p = new Person("Connor", "blue");
let people = [];

const faker = require('faker');

for(let i=0;i<99;i++){
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color));
}



App.get("/person/name/:name", (req, res) => {

    let result = "Invalid";
    people.forEach((value) => {
        if(value.name == req.params.name){
            res.send(value);
        }
    });
    res.send(result)
});

App.get("/person/color/:color", (req, res) => {
    let result = "Invalid";
    people.forEach((value) => {
        if(value.color == req.params.color){
            res.send(value);
        }
    });
    res.send(result);
});

App.listen(port, () =>{
    console.log("Server Running!");
});