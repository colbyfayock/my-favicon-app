import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [favicon, setFavicon] = useState('');
  console.log(`favicon state: ${favicon}`);
  function handleOnClick() {
    setFavicon('favorite');
    setTimeout(() => setFavicon(''), 3000);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon ? `/favicon-${favicon}-32x32.png` : `/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon ? `/favicon-${favicon}-16x16.png` : `/favicon-16x16.png`} />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          <button onClick={handleOnClick} style={{
            color: 'white',
            backgroundColor: 'blueviolet',
            padding: '.6em .8em',
            border: 0,
            cursor: 'pointer'
          }}>
            ❤️ Smash that Like button!
          </button>
        </p>

        <p>
          <Link href="/admin">
            <a>
              <h2>Admin &rarr;</h2>
            </a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
