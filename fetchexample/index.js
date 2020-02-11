const Express = require("express");
const App = Express();
const port = 80;


App.use("/", Express.static("public"));

App.get("/api/:value", (req, res) => {

    let result = {"error": "You done fucked up A-Aron"};

    if(req.params.value == 5){
        result = {"secret":"you knew the secret"};
    }

    else{
        
    }
    res.json(result);
});

App.listen(port, () =>{
    console.log("server up");
})