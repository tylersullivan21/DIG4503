/*import styles from"./TypeSearch.module.css";*/
import styles from"./TypeSearch.module.css";
import Link from "next/link"
class TypeSearch extends React.Component{
    readType = (event) => {
     event.preventDefault();
           let pokemonType = document.querySelector("#type");
   
   //need to figure out how to patch api
           fetch("/api/pokemon/type/" + pokemonType.value)
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
                 <div className={styles.nav}>
      <Link href="/idsearch">
      <button><a className={styles.rightlink} >id search</a></button>
          </Link>
          <Link href="/namesearch">
          <button><a className={styles.rightlink} >name search</a></button>
          </Link>
          </div>
                <h2>Search for Pokemon by type!</h2>
                <form >
                   <input id="type" type="text" />
                   <br></br>                   <button onClick={this.readType}>Submit</button>
               </form>
             
           </div>
       );
   }
   
   }
   
   
   export default TypeSearch;