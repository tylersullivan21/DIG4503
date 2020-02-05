const Express = require("express");
const App = Express();
const port = 80;

const Person = require("./Person.js");
const faker = require('faker');

let people = [];

for(let i = 0; i < 99; i++)
{
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color));
}

App.get("/people/name/:name", (req, res) => {
    people.forEach((value)=> {
        if(value.name == req.params.name) {
            res.send(value);
        }
    });

    res.send("Invalid!");

});

App.get("/people/color/:color", (req, res) => {
    people.forEach((value)=> {
        if(value.color == req.params.color) {
            console.log(req.path);
            res.send(value);
        }
    });
    console.log(req.path);
    res.send("Invalid!");

});

App.listen(port, () => {
    console.log("Server running!");
});
