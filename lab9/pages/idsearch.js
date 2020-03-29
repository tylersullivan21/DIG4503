import NameSearch from "../components/NameSearch/index";
import IdSearch from "../components/IdSearch/index";
import TypeSearch from "../components/TypeSearch";
import styles from"../components/IdSearch/IdSearch.module.css";
import Head from 'next/head';
import Link from 'next/link';

const Home = () =>{
return(

  <div>
         <Head>
        <title>This is the Name Search page!</title>
      </Head>
      <div className={styles.nav}>
      <Link href="/namesearch">
      <button><a className={styles.rightlink} >name search</a></button>
          </Link>
          <Link href="/typesearch">
          <button><a className={styles.rightlink} >type search</a></button>
          </Link>
          </div>     
       
  
  <IdSearch />
  <div className={styles.reportarea} >
    <h2 className={styles.reporting}>Your Result:</h2>
    <div className={styles.reporting}id="reportingArea"></div>
    </div>
  </div>

)
}
export default Home;