import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.flex}>
        <a href="/">Quiz App</a>
        <div>
          <a href="/" className={styles.navItem}>
            Home
          </a>
          <a href="/profile" className={styles.navItem}>
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
