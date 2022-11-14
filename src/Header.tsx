import React, { useState } from 'react';

import ArrowDown from './assets/icon-arrow-down.svg';
import Logo from './assets/logo.svg';
import styles from './styles.module.scss';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <img className={styles.logo} src={Logo} alt="logo" />
      <nav>
        <ul className={styles['nav-items']}>
          <li>
            Features <img src={ArrowDown} alt="arrow-down" />
          </li>
          <li>
            Company <img src={ArrowDown} alt="arrow-down" />
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className={styles['login-items']}>
          <button id={styles.login}>Login</button>
          <button id={styles.register}>Register</button>
        </div>

        <div
          className={`${styles['menu-button']} ${showMenu ? styles.active : ''}`}
          onClick={() => setShowMenu((val) => !val)}
        >
          <div className={styles.bar}></div>
        </div>
      </nav>
    </header>
  );
}
