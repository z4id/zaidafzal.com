import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zaid Afzal</title>
        <meta name="description" content="Cloud Architect, Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I am <a href="#">Zaid Afzal</a>
        </h1>

        <p className={styles.description}>
          Cloud Architect | Software Engineer
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/z4id" className={styles.card}>
            <h2>Github <Image src="/github-logo.png" alt="Zaid's Github" width={30} height={30} /> &rarr;</h2>
            <p>Checkout my code repositories and contributions</p>
          </a>

          <a href="https://www.linkedin.com/in/zaid-afzal" className={styles.card}>
            <h2>LinkedIn <Image src="/linkedin-logo.png" alt="Zaid's LinkedIn" width={30} height={30} /> &rarr;</h2>
            <p>See my achievements and skills on LinkedIn</p>
          </a>

          <a
            href="https://stackoverflow.com/users/10973792/zaid-afzal"
            className={styles.card}
          >
            <h2>StackOverflow <Image src="/stackoverflow-logo.png" alt="Zaid's StackOverflow" width={30} height={30} /> &rarr;</h2>
            <p>Discover tech related Questions/Answers on SO</p>
          </a>

          <a
            href="https://twitter.com/z41do"
            className={styles.card}
          >
            <h2>Twitter <Image src="/twitter-logo.png" alt="Zaid's Twitter" width={30} height={30} /> &rarr;</h2>
            <p>
              See what I tweet about in free time
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <a href="https://github.com/z4id"><Image src="/github-logo.png" alt="Zaid's Github" width={30} height={30} /></a>
          </span>
        </a>
      </footer>
    </div>
  )
}
