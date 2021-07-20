import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Efarmogi Computers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      
    </div>
  )
}
