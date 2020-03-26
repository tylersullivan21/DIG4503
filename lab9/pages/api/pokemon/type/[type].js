import pokemon from 'json-pokemon/pokemon';

function response(req,res){
for(let i=0; i< pokemon.length; i++) {

    for(let k=0; k < pokemon[i].typeList.length; k++){
        
    }

}


}



/*
export default (req, res) => {

    let result = {"error": "Could not find name."};

    let pokemon = getPokemon.getPokemonByType(req.query.type);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}