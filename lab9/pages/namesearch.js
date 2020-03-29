import NameSearch from "../components/NameSearch/index";
import styles from"../components/NameSearch/NameSearch.module.css";


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
          <a className={styles.links}>id search</a>
          </Link>
<br></br>
<Link href="/typesearch">
          <a className={styles.links}>type search</a>
          </Link>
       
          </div>
  <NameSearch />

  <div className={styles.reportarea} >
    <h2 className={styles.reporting}>Your Result:</h2>
    <div className={styles.reporting}id="reportingArea"></div>
    </div>
  </div>

)
}
export default Home;