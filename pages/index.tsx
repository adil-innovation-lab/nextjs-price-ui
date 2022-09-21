import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Features } from '../components/Features'
import { Header } from '../components/Header'
import { Pricing } from '../components/Pricing'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Pricing />
      <Features />
    </div>
  )
}

export default Home
