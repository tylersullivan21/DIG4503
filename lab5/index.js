/* setting up the assets being required in this project*/
const Express = require('express');
const chalk = require('chalk');
const pokemons = require('json-pokemon');
const pokeObject = pokemons;
const getPokemons = require('json-pokemon/getPokemon');
const App = Express();
const port = 80;


/*********************************/
//Add static route, using App.use()
/*********************************/

App.use("/", Express.static("public"));

/*********************************/
/*Code to search Pokemon by ID*/
/*********************************/
App.get("/id/:id", (req, res) => {
    let result = { "error": "That Pokemon does not exist in our records!" };

pokeObject.forEach((value => {
  if(value.id == req.params.id){
      result = value;
     console.log("found the result", result);
  }
}));
if(result.error){
    console.log(chalk.red(req.path));
}
else{
  console.log(chalk.green(req.path));
}
res.send(result)
});




/*********************************/
/*Code to search Pokemon by name*/
/*********************************/

//1) Used .toLowerCase() to ensure that all name being input will match the "/name/:name" spec for lab4 

App.get("/name/:name", (req, res) => {
    let result = { "error" : "That Pokemon does not exist in our records!" };
    pokeObject.forEach((value) => {
      if(value.name.toLowerCase() == req.params.name) {
          result = value;
      }
    });
    if(result.error){
      console.log(chalk.red(req.path));
  }
  else{
    console.log(chalk.green(req.path));
  }
  res.send(result)
  });


App.listen(port, () =>{
    console.log("Server is running, Gotta Catch em all Prof Cox!");
});




