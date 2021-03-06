import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-admin-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-admin-16x16.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Admin
        </h1>

        <p>
          <Link href="/">
            <a>
              <h2>Home &rarr;</h2>
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
