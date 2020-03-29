import pokemon from 'json-pokemon';

export default  (req,res) => {

    let result = [{"error": "Could not find pokemon type."}];
  
    let type = req.query.type;

    for(let i = 0; i < pokemon.length; i++) {
        /*console.log(pokemon[i]);*/
        for(let k = 0; k < pokemon[i].typeList.length; k++) {

            if (type == pokemon[i].typeList[k]) {
                result.push(pokemon[i]);
              
            } 
            else{
                
            }
        }

    }  

  /*  console.log(result);*/
  /* figured out how to make table work, need to figure out how to display error*/
  /*googled that two res.json() cannot be sent together at the same time*/
    if(pokemon == type) {
        result = type;
    }

    res.json(result);

}



