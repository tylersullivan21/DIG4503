const Express = require("express");
const App = Express();
const port = 4000;



const Person = require("./Person.js")
let p = new Person("Dan", "green");
let people[];

const faker = require("faker");
let name = faker.name.findName();
let color = faker.color.findName();

for(let i = 0; i< 99; i++)
{

   

    people.push(new Person());
}


App.get("/person/name/:name", (req,res) => {
    people.forEach((value) =>{
            if(value.name == req.params.name){
                    res.send(value)
            }
    });

    res.send("Hey ont you)

res.send(req.params.name);

});

App.get("/person/color/:color", (req,res) => {
    res.send(req.params.color);
    
    });

App.listen(port, () => {
    console.log("Server Running");
});