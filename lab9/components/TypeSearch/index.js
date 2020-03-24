class TypeSearch extends React.Component{

    readId(event){
       event.preventDefault();
   
   
           let pokemonType = document.querySelector("#type");
   
   //need to figure out how to patch api
           fetch("api/pokemon/typeList/" + pokemonType.value)
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
                <h2>Pokemon Type</h2>
                <form onSubmit={this.readType}>
                   <input id="type" type="text" />
                   <button>Submit</button>
               </form>
           </div>
       );
   }
   
   
   }
   
   
   export default TypeSearch;