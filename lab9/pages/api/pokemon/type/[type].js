import pokemon from 'json-pokemon/pokemon';

export default  (req,res) => {

    let result = {"error": "Could not find pokemon type."};
    let pokearray= [];
 
    for(let i = 0; i < pokemon.length; i++) {
        for(let k = 0; k < pokemon[i].typeList.length; k++) {

            if (type = pokemon[i].typeList) {
                pokearray.push(pokemon[i].typeList);
            } else if (type = null) {
                res.json(result);
            }
        }
    }
res.json(pokearray);
}



