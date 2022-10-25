import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import ContactSection from '../components/home/sections/Contact'
import CVSection from '../components/home/sections/CV'
import Perks from '../components/home/sections/Perks'
import TestimonialsSection from '../components/home/sections/Testimonials'
import Welcome from '../components/home/sections/Welcome'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <Welcome />
        <Perks />
        <TestimonialsSection />
        <CVSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home
