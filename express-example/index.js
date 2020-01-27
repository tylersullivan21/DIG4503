const Express = require("express");
const App = Express();


App.get("/", function(){

console.log("Request!");

})
App.listen(80, function(){


console.log("Server Running");

})