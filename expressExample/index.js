const Express = require("express");
const App = Express();
const port = 80;

/*
App.use(Express.static("static"));
*/
App.use(Express.static("client/build"));

App.use("/anotherFolder", Express.static("anotherFolder"));

App.get("/api", function(req,res){
    res.send("Hi vivien");
});


App.listen(port, () => {

console.log("Server Running!");

});