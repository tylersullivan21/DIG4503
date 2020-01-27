const Express = require("express");
const App = Express();
const port = 8080;


App.get("/", function(Request, Response){

Response.send("<p>Hi</p>");

})

App.get("/book", function(Request, Response){
    Response.send("Book");
})


App.listen(port, function(){


console.log("Server Running");

})