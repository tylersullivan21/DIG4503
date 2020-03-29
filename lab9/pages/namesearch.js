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
     

        <div className={styles.nav}>
      <Link href="/idsearch">
      <button><a className={styles.rightlink} >id search</a></button>
          </Link>
          <Link href="/typesearch">
          <button><a className={styles.rightlink} >type search</a></button>
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