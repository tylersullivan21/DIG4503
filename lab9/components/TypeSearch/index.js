/*import styles from"./TypeSearch.module.css";*/
class TypeSearch extends React.Component{
    readType = () => {
    
           let pokemonType = document.querySelector("#type");
   
   //need to figure out how to patch api
           fetch("http://localhost:3000/api/pokemon/type/" + pokemonType.value)
           .then((res) =>{
           return res.json();
           })
            .then((processed) =>{
            this.props.callback(processed);
          
           }
    );
   }
   
   render() {
       return(
           <div>
             
                <h2>Pokemon Type</h2>
                <form >
                   <input id="type" type="text" />
                   <button onClick={this.readType}>Submit</button>
               </form>
             
           </div>
       );
   }
   
   }
   
   
   export default TypeSearch;