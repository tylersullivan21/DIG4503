/* setting up the assets being required in this project*/
const Express = require('express');
const chalk = require('chalk');
const pokemons = require('json-pokemon')
const getPokemons = require('json-pokemon/getPokemon');
const App = Express();
const port = 80;


/*********************************/
/*Code to search Pokemon by name*/
/*********************************/
App.get("/name/:name", (req,res)=>{
      
    let userInput = req.params.name;
let pokeObj = getPokemons.getPokemonByName(userInput);
    //console.log(result);

    if (pokeObj){
        res.send(pokeObj)
        console.log(chalk.green(req.path));
    }
    else{
       res.send("That is not a valid name of a pokemon");
        // console.log(result);
    }
    return result;
});


/*********************************/
/*Code to search Pokemon by name*/
/*********************************/


App.get("/id/:id", (req, res)=>{
    /* Use number() found in json-pokemon doccumentation*/
    let id = req.params.id
    pokeObj = getPokemons.getPokemonById(Number(id));

    if (pokeObj){
        res.send(pokeObj);
        console.log(chalk.green(req.path));
    }
    else{
     res.send("That is not a valid ID of a pokemon.");
     console.log(chalk.red("That is not a valid ID of a pokemon"));
    }
    return result;
}); 

App.listen(port, () =>{
    console.log("Server Running!");
});