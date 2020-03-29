
import styles from"./nav.module.css";

import Head from 'next/head';
import Link from 'next/link';


const Home = () =>{
return(

<div>
<div>
  <Head>
<title>This is a test title</title>
    </Head>
          <p className={styles.para}>Welcome Poke Trainer! Check out some of your fave pokemon by name, id and type!</p>

        <div className={styles.navcontainer}>
          <Link href="/namesearch">
          <button className={styles.button}><a className={styles.left} >name search</a></button>
          </Link>

          <Link href="/idsearch">
          <button className={styles.button}><a className={styles.center} >id search</a></button>
          </Link>

          <Link href="/typesearch">
          <button className={styles.button}><a className={styles.right} >typesearch</a></button>
          </Link>

          </div>
          </div>
  </div>

)
}
export default Home;