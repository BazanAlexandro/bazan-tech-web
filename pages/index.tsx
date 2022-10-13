import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Welcome from '../components/home/sections/Welcome'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Welcome />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
