const Express = require("express");
const App = Express();
const port = 4000;


App.get('/', function(request,response){
    response.send("Hello World! It is tyler");
})


App.use("/public", Express.static("public"));




App.listen(port, () => {

console.log("Server is running!");

})