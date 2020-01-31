const Express = require("express");
const App = Express();
const port = 4000;


App.get('/', function(request,response){
    response.send("Hello World!");
})


App.use("/public", Express.static("public"));




App.listen(port, function(){

console.log("Server is running!");

})