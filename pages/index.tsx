import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "./components/board";

const Home: NextPage = () => {
  

  return (
    <div>
      <Head>
        <title>Ordis</title>
        <meta name="description" content="Ordis är ett ordspel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Ordis</h1>
        <Board />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.newdefault.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ett hobbyprojekt av <span className={styles.logo}>New Default</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
