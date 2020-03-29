import styles from"./IdSearch.module.css";

class IdSearch extends React.Component{

    readId(event){
       event.preventDefault();
   
   
           let pokemonId = document.querySelector("#id");
   
   //need to figure out how to patch api
           fetch("api/pokemon/id/" + pokemonId.value)
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
               <div className={styles.background}>
                <h2 className={styles.head}>Search Pokemon By Id Number</h2>
                <form className={styles.form} onSubmit={this.readId}>
                   <input className={styles.input} id="id" type="text" />
                   <br></br>
                   <button className={styles.submit}>Submit</button>
               </form>
               </div>
           </div>
       );
   }
   
   
   }
   
   
   export default IdSearch;