import React, { useState } from 'react';

import Header from './Header';

import Audio from './assets/client-audiophile.svg';
import Databiz from './assets/client-databiz.svg';
import Maker from './assets/client-maker.svg';
import Meet from './assets/client-meet.svg';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <main>
        <div className={styles['mobile-img']}>
          <img src="/images/image-hero-mobile.png" alt="mobile" />
        </div>

        <section>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline processes, create team
            rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>

          <div className={styles.companies}>
            <img src={Databiz} alt="databiz" />
            <img src={Audio} alt="audio" />
            <img src={Meet} alt="meet" />
            <img src={Maker} alt="maker" />
          </div>
        </section>

        <div className={styles['desktop-img']}>
          <img src="/images/image-hero-desktop.png" alt="desktop" />
        </div>
      </main>

      <footer className={styles.attribution}>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/rylanzhou">Rylan Zhou</a>.
      </footer>
    </div>
  );
}

export default App;
