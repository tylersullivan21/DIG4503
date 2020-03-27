import NameSearch from "../components/NameSearch/index";
import IdSearch from "../components/IdSearch/index";


import Head from 'next/head';
import Link from 'next/link';


const Home = () =>{
return(

<div>
<div>
  <Head>
<title>This is a test title</title>
    </Head>
          <p>Test</p>

          <Link href="/namesearch">
          <a>name search</a>
          </Link>
<br>
</br>
          <Link href="/idsearch">
          <a>id search</a>
          </Link>

          <Link href="/typesearch">
          <a>type search</a>
          </Link>

          </div>
  </div>

)
}
export default Home;