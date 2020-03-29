import styles from"./NameSearch.module.css";
class NameSearch extends React.Component{

    //Create function that Create a function to be called when the user clicks on the <button> in the ID form, uses fetch(), and updates the reporting area
    readName(event){
        event.preventDefault();
        let pokemonName = document.querySelector("#name");
        //need to figure out how to patch api
        fetch("api/pokemon/name/" + pokemonName.value)
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
                <div className={styles.background}>
                 <h2 className={styles.head}>Search a pokemon by name!</h2>
                 <form className={styles.form} onSubmit={this.readName}>
                 <input className={styles.input} id="name" type="text" />
                   <br></br>
                   <button className={styles.submit}>Submit</button>
                </form>
                </div>
            </div>
        );
    }

    
}



export default NameSearch;