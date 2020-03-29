import Head from "next/head";
import Link from "next/link";
import TypeSearch from "../components/TypeSearch";
import styles from"../components/TypeSearch/TypeSearch.module.css";
class App extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        "table": []
      };
    }
  
    // Update the internal state.table
    // (This is called from YearSearch.)
    setResultsTable = (processed) => {
      this.setState({"table": processed});
      console.log(processed);
    }
  
    // Render the results table
    createResultsTable() {
      return (
            <div >
        <Head>
        <title>This is the Type Search page!</title>
      </Head>
      <div className={styles.nav}>
      <Link href="/idsearch">
      <button><a className={styles.rightlink} >id search</a></button>
          </Link>
          <Link href="/namesearch">
          <button><a className={styles.rightlink} >name search</a></button>
          </Link>
          </div>     
        <table className={styles.container}>
          <tbody className={styles.table}>
          {
            this.state.table.map((entry, index) => {
               return( 
                <tr key={index}>
                        <td className={styles.idtext}>{entry.id}</td>
                  <td className={styles.nametext}>{entry.name}</td>
                  <td>{entry.type}</td>
                </tr>
               );
            })
          }
          </tbody>
        </table>
        </div>
      );
  
    }
    render() {
        return (
          <div className={styles.container}>
            <TypeSearch  callback={this.setResultsTable} />
            {this.createResultsTable()}
          </div>
        );
      }
      
    }
    
    export default App;