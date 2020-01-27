const Express = require("express");
const App = Express();
const port = 8080;

const Person = require("./Person");

let p = new Person("Tyler", "Magenta");

let db = [5, 24, 25, 16];

App.get("/", function(Request, Response){

/*Response.json({"db": db[1]});*/
Response.send(p);

})

App.get("/book", function(Request, Response){
    Response.send("Book");
})


App.listen(port, function(){


console.log("Server Running");

})