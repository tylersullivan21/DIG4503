/* setting up the assets being required in this project*/
const Express = require('express');
const chalk = require('chalk');
const pokemons = require('json-pokemon')
const getPokemons = require('json-pokemon/getPokemon');
const App = Express();
const port = 80;



/*********************************/
/*Code to search Pokemon by ID*/
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
    
}); 

/*********************************/
/*Code to search Pokemon by ID*/
/*********************************/




/*********************************/
/*Code to search Pokemon by name*/
/*********************************/
App.get("/name/:name", (req,res)=>{
      /*Build function that will change user input to capital first letter so will work with library*/
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
    let userInput = req.params.name;
    let pName = capitalizeFirstLetter(userInput);
    let pokeObj = getPokemons.getPokemonByName(pName);
    
    if (pokeObj){
        res.send(pokeObj)
        console.log(chalk.green(req.path));
    }
    else{
       res.send("That is not a valid name of a pokemon");
       console.log(chalk.red("Thats not a valid name for a Pokemon."));

    }
});


/*********************************/
/*Code to search Pokemon by name*/
/*********************************/



App.listen(port, () =>{
    console.log("Server is running, Gotta Catch em all Prof Cox!");
});