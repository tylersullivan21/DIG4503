import NameSearch from "../components/NameSearch/index";
import IdSearch from "../components/IdSearch/index";
import TypeSearch from "../components/TypeSearch";

import Head from 'next/head';


const Home = () =>{
return(

  <div>
         <Head>
        <title>This is the home page!</title>
      </Head>
    <IdSearch />
  <NameSearch />
  <TypeSearch />

 
    <h2>Reporting</h2>
    <div id="reportingArea"></div>

    <Link href="/namesearch">
          <a>Name Search</a>
        </Link>
  </div>

)
}
export default Home;