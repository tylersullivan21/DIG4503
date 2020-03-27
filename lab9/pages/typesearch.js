import Head from "next/head";
import Link from "next/link";

import TypeSearch from "../components/TypeSearch/index";
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
    }
  
    // Render the results table
    createResultsTable() {
  
      return (
            <div>
        <Head>
        <title>This is the Type Search page!</title>
      </Head>
        <table>
          <tbody>
          {
            this.state.table.map((entry, index) => {
               return( 
                <tr key={index}>
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
          <div>
            <TypeSearch callback={this.setResultsTable} />
            {this.createResultsTable()}
          </div>
        );
      }
      
    }
    
    export default App;