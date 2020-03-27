import pokemon from 'json-pokemon';

export default  (req,res) => {

    let result = [{"error": "Could not find pokemon type."}];
    
    let pokearray = [];
    let type = req.query.type;

    for(let i = 0; i < pokemon.length; i++) {
        /*console.log(pokemon[i]);*/
        for(let k = 0; k < pokemon[i].typeList.length; k++) {

            if (type == pokemon[i].typeList[k]) {
                pokearray.push(pokemon[i]);
                console.log(pokearray) 
            } 
        }
    }

    if(pokearray.length == 0){
        res.json(result);
    }
    else{
res.json(pokearray);
    }
}



