import React, { useState } from 'react';

import ArrowDown from './assets/icon-arrow-down.svg';
import Calendar from './assets/icon-calendar.svg';
import MenuClose from './assets/icon-close-menu.svg';
import Menu from './assets/icon-menu.svg';
import Planning from './assets/icon-planning.svg';
import Reminder from './assets/icon-reminders.svg';
import Todo from './assets/icon-todo.svg';
import Logo from './assets/logo.svg';

import styles from './styles/Header.module.scss';

function FeatureSubmenu({ active, style }: { active: boolean; style?: React.CSSProperties }) {
  return (
    <ul className={`${styles.submenu} ${active ? styles.active : ''}`} style={style}>
      <li>
        <img src={Todo} alt="icon-todo" /> Todo List
      </li>
      <li>
        <img src={Calendar} alt="icon-calendar" /> Calendar
      </li>
      <li>
        <img src={Reminder} alt="icon-reminders" /> Reminders
      </li>
      <li>
        <img src={Planning} alt="icon-planning" /> Planning
      </li>
    </ul>
  );
}

function CompanySubmenu({ active, style }: { active: boolean; style?: React.CSSProperties }) {
  return (
    <ul className={`${styles.submenu} ${active ? styles.active : ''}`} style={style}>
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  );
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [featureSubMenuActive, setFeatureSubMenuActive] = useState(false);
  const [companySubMenuActive, setCompanySubMenuActive] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <nav>
          <ul className={styles['nav-items']}>
            <li
              onMouseEnter={() => setFeatureSubMenuActive(true)}
              onMouseLeave={() => setFeatureSubMenuActive(false)}
            >
              Features{' '}
              <img
                className={`${featureSubMenuActive ? styles.active : ''}`}
                src={ArrowDown}
                alt="arrow-down"
              />
              <FeatureSubmenu active={featureSubMenuActive} style={{ left: '5rem' }} />
            </li>
            <li
              onMouseEnter={() => setCompanySubMenuActive(true)}
              onMouseLeave={() => setCompanySubMenuActive(false)}
            >
              Company{' '}
              <img
                className={`${companySubMenuActive ? styles.active : ''}`}
                src={ArrowDown}
                alt="arrow-down"
              />
              <CompanySubmenu active={companySubMenuActive} style={{ left: '16rem' }} />
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className={styles['login-items']}>
            <button className={styles.login}>Login</button>
            <button className={styles.register}>Register</button>
          </div>

          <div className={styles['menu-button']} onClick={() => setShowMenu((val) => !val)}>
            <img src={Menu} alt="icon-menu" />
          </div>
        </nav>
      </header>

      <div className={`${styles.mask} ${showMenu ? styles.active : ''}`}></div>

      <div className={`${styles.drawer} ${showMenu ? styles.active : ''}`}>
        <div className={styles.top}>
          <img src={MenuClose} alt="icon-close-menu" onClick={() => setShowMenu((val) => !val)} />
        </div>

        <ul className={styles['nav-items-mobile']}>
          <li onClick={() => setFeatureSubMenuActive((val) => !val)}>
            Features{' '}
            <img
              className={`${featureSubMenuActive ? styles.active : ''}`}
              src={ArrowDown}
              alt="arrow-down"
            />
            <FeatureSubmenu active={featureSubMenuActive} />
          </li>
          <li onClick={() => setCompanySubMenuActive((val) => !val)}>
            Company{' '}
            <img
              className={`${companySubMenuActive ? styles.active : ''}`}
              src={ArrowDown}
              alt="arrow-down"
            />
            <CompanySubmenu active={companySubMenuActive} />
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>

        <div className={styles['login-items']}>
          <button className={styles.login}>Login</button> <br />
          <button className={styles.register}>Register</button>
        </div>
      </div>
    </>
  );
}
