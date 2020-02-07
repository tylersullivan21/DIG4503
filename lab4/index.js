/* setting up the assets being required in this project*/
const Express = require('express');
const chalk = require('chalk');
const pokemons = require('json-pokemon');
const getPokemons = require('json-pokemon/getPokemon');
const App = Express();
const port = 80;

/*********************************/
/*Code to search Pokemon by ID*/
/*********************************/
App.get("/id/:id", (req, res)=>{
    /* Use number() found in json-pokemon doccumentation
    number function changes string to number*/
    let id = req.params.id
    pokeObj = getPokemons.getPokemonById(Number(id));

        /* checking to see if the id response from the json-pokemon object is null or not*/
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

/******************************************************************************/
/******************************************************************************/

/*********************************/
/*Code to search Pokemon by name*/
/*********************************/
App.get("/name/:name", (req,res)=>{
      /*Build function that will change userInput to capital first letter so will work with library requirements*/
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} 

/* Initialize req.params.name to Dynamic Route input from userInput*/
/* Take userInput string and run it through capitalizeFirstLetter function to captitalize first letter of userInput and initialize modified string to pName*/
/* Fetch corresponding pokeObj from json-pokemon api  */
    let userInput = req.params.name;
    let pName = capitalizeFirstLetter(userInput);
    let pokeObj = getPokemons.getPokemonByName(pName);
    
    /* checking to see if the name response from the json-pokemon object matches or not*/
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