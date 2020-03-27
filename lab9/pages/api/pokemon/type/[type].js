import pokemon from 'json-pokemon/pokemon';

export default  (req,res) => {

    let result = {"error": "Could not find pokemon type."};

 
for(let i=0; i< pokemon.length; i++) {

    for(let k=0; k < pokemon[i].typeList.length; k++){
        
        if(pokemon[i].typeList[k] == req.query.type){
            result.push(pokemon[i])
        }
console.log(pokemon[i])
    }

}
res.json(result);
}