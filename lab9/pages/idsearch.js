import NameSearch from "../components/NameSearch/index";
import IdSearch from "../components/IdSearch/index";
import TypeSearch from "../components/TypeSearch";

import Head from 'next/head';
import Link from 'next/link';

const Home = () =>{
return(

  <div>
         <Head>
        <title>This is the Name Search page!</title>
      </Head>
      <Link href="/namesearch">
          <a>id search</a>
          </Link>
<br>
</br>
<Link href="/typesearch">
          <a>type search</a>
          </Link>
       
  
  <IdSearch />

    <h2>Reporting</h2>
    <div id="reportingArea"></div>
  </div>

)
}
export default Home;