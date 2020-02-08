/* setting up the assets being required in this project*/
const Express = require('express');
const chalk = require('chalk');
const pokemons = require('json-pokemon');
const pokeObject = pokemons;
const getPokemons = require('json-pokemon/getPokemon');
const App = Express();
const port = 80;


/*********************************/
/*Code to search Pokemon by ID*/
/*********************************/
App.get("/id/:id", (req, res) => {
    let invalidMessage = { error: "That Pokemon does not exist in our records!" };

pokeObject.forEach(value => {
  if(value.id === req.params.id){
      res.send(value);
      console.log(chalk.green(req.path));
      invalidMessage = value;
  }
});
if(invalidMessage.error){
    res.send(invalidMessage);
    console.log(chalk.red("Sorry that Pokemon does not exist in our records!"));
}

})




/*********************************/
/*Code to search Pokemon by name*/
/*********************************/


App.get("/name/:name", (req, res) => {
    let invalidMessage = { error: "That Pokemon does not exist in our records!" };
    pokeObject.forEach(value => {
      if (value.name == req.params.name) {
        res.send(value);
        console.log(chalk.green(req.path));
        invalidMessage = value;
      }
    });
    if (invalidMessage.error) {
      console.log(chalk.red(req.path));
      res.send(invalidMessage);
    }
  });
App.listen(port, () =>{
    console.log("Server is running, Gotta Catch em all Prof Cox!");
});