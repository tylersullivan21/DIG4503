const Express = require('express');

const chalk = require('chalk');

const pokemons = require('json-pokemon')
const getPokemons = require('json-pokemon/getPokemon');

const App = Express();
const port = 80;



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

/*

App.get("/id/:id", (req, res)=>{
    
    let result = {"error": "Nothing found that matches that. :C"};
    
    pokemonArray.forEach((value)=>{
        if(value.id == req.params.id){
            res.send(value);
        }
    });
//debugging
    //console.log(result);

    if (result.error){
        console.log(chalk.red(req.path));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
        // console.log(result);
    }
    return result;
}); 
*/
App.listen(port, () =>{
    console.log("Server Running!");
});