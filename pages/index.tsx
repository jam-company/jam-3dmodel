import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Three from './three'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Three />
    </div>
  )
}

export default Home
