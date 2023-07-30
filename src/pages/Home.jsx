import React from 'react';
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
      Home
      <h1 className="h1"> Quiz App</h1>
      <div className={styles.flex}>
        <div className={styles.col6}>
          <a className={styles.card} href="/country-capitals">
            country-capitals
          </a>
        </div>
        <div className={styles.col6}>
          <a className={styles.card} href="/mountains-peaks">
            mountains-peaks
          </a>
        </div>
        <div className={styles.col6}>
          <a className={styles.card} href="/rivers-lakes">
            rivers-lakes
          </a>
        </div>
        <div className={styles.col6}>
          <a className={styles.card} href="/places-in-country">
            places-in-country
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
