const Express = require("express");
const App = Express();
const port = 4000;

App.get("/:id", (req,res) => {
res.send(req.params);

});

App.listen(port, ()=>{
    console.log("Server Running");
})