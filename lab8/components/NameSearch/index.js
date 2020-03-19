import React from 'react';


class NameSearch extends React.Component{

    //Create function that Create a function to be called when the user clicks on the <button> in the ID form, uses fetch(), and updates the reporting area
    readName(event){
        event.preventDefault();
        let pokemonName = document.querySelector("#name");
        //need to figure out how to patch api
        fetch("api/pokemon/name/" + pokemonName.value.toLowerCase())
        .then((res) =>{
            return res.json();
        })
        .then((processed) =>{

            let outputArea= document.querySelector("#reportingArea");


            if(processed.error){
                outputArea.innerHTML = processed.error;
            }
            else{
                /*
                outputArea.innerHTML = processed.name + ": "+ processed.id + " : "+ processed.typeList;
                */
               outputArea.innerHTML = processed.name;
            }
        });

    }
    render() {
        return(
            <div>
                 <h2>Name</h2>
                 <form onSubmit={this.readName}>
                    <input id="name" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

    
}



export default NameSearch;