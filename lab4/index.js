const Express = require('express');
const App = Express();
const port = 80;



App.get("/person/name/:name", (req, res) => {

    let result = {"error": "couldnt find"};
    people.forEach((value) => {
        if(value.name == req.params.name){
            res.send(value);
        }
    });
    res.send(result)
});

App.get("/person/color/:color", (req, res) => {
    let result = "Invalid";
    people.forEach((value) => {
        if(value.color == req.params.color){
            console.log(req.path);
            res.send(value);
        }
    });

    if(result.error){
        console.log(req.path);
    }
    else{
        console.log(req.path);
    }
    res.send(result);
});

App.listen(port, () =>{
    console.log("Server Running!");
});