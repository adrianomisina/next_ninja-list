import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja List | Home </title>
        <meta name='keywords' content='ninjas'/>
    </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sodales turpis sit amet felis laoreet, eu commodo nisl aliquam.
        Curabitur sodales cursus convallis. Pellentesque fermentum dui a nisl
        eleifend rutrum. Donec nec viverra lorem. In at laoreet libero.
        Phasellus viverra nisl et dolor tristique rhoncus. Fusce eu malesuada
        orci, quis finibus nulla.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sodales turpis sit amet felis laoreet, eu commodo nisl aliquam.
        Curabitur sodales cursus convallis. Pellentesque fermentum dui a nisl
        eleifend rutrum. Donec nec viverra lorem. In at laoreet libero.
        Phasellus viverra nisl et dolor tristique rhoncus. Fusce eu malesuada
        orci, quis finibus nulla.
      </p>
      <Link className={styles.btn}   href="/ninjas">See Ninja Listing</Link>
    </div>
    </>
  );
}
