import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gleanathon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <div>
            <h1 className={styles.title}>
              Let's save the earth
            </h1>
            <div className={styles.subtitle}>
              <p>How?</p>
              <p>By harvesting and sharing the surplus of the fields to the WORLD</p>
            </div>
            <div className={styles.counter}>
              <h3>75+</h3>
              <p>kgs of food delivered to food banks!</p>
            </div>
          </div>
          <div>
            <p>Image goes here</p>
            {/* image will be inserted here */}
          </div>
        </div>
        <div className={styles.right}>
          <p>Form goes here</p>
          {/* form will be inserted here */}
        </div>
      </main>
    </div>
  )
}
