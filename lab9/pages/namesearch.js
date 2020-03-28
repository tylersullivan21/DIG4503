import NameSearch from "../components/NameSearch/index";


import Head from 'next/head';
import Link from 'next/link';

const Home = () =>{
return(

  <div>
         <Head>
        <title>This is the Name Search page!</title>
      </Head>
      <div>
      <Link href="/idsearch">
          <a>id search</a>
          </Link>
<br></br>
<Link href="/typesearch">
          <a>type search</a>
          </Link>
       
          </div>
  <NameSearch />

    <h2>Reporting</h2>
    <div id="reportingArea"></div>
  </div>

)
}
export default Home;