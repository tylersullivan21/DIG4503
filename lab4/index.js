const Express = require("express");
const App = Express();
const port = 8080;

App.get('/', function(request,response){
    response.send("Hello World!");
})

App.listen(port,() => {
    console.log("Server is running");
})