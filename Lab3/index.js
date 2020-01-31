const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("static"));

/*
App.get('/', function(request,response){
    response.send("This is testing here");
})
*/

App.listen(port, function(){

console.log("Server is running!");

})