import React from 'react';

class IdSearch extends React.Component{

 readId(event){
    event.preventDefault();


        let pokemonId = document.querySelector("#id");

//need to figure out how to patch api
        fetch("http://localhost:80/id/" + pokemonId.value)
        .then((res) =>{

        return res.json();
        })
    .then((processed) =>{

         let outputArea= document.querySelector("#reportingArea");


        if(processed.error){
            outputArea.innerHTML = processed.error;
        }
        else{
            outputArea.innerHTML = processed.name;
            /*
                        outputArea.innerHTML = processed.id+ ": "+ processed.name + " : "+ processed.typeList;
                        */
        }
 });

}

render() {
    return(
        <div>
             <h2>id</h2>
             <form onSubmit={this.readId}>
                <input id="id" type="text" />
                <button>Submit</button>
            </form>
        </div>
    );
}


}


export default IdSearch;