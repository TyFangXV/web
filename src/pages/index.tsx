import type { NextPage } from 'next';
import Name, { Age } from '../components/landing/name';
import Social from '../components/landing/social';
import styles from '../styles/Home.module.css';
import { FiMenu } from 'react-icons/fi';
import MenuScreen from '../components/menu/menuscreen';
import React from 'react';
import { useRecoilState } from 'recoil';
import { isMenuOpen } from '../state/menu';
const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(isMenuOpen)

  return (
    <div className={styles.container}>
      <div hidden={!menuOpen}>
        <span
          className={styles.topRight}
          style={{ marginTop: '2%', marginRight: '1%' }}
        >
          <FiMenu
            className={styles.menu_btn}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </span>
        <MenuScreen />
      </div>

      <div hidden={menuOpen}>
        <span
          className={styles.left}
          style={{ marginTop: '2%', marginLeft: '1%' }}
        >
          <span style={{ textAlign: 'center' }}>
            <Age />
          </span>
        </span>
        <span
          className={styles.bottomRight}
          style={{ marginBottom: '5vw', marginRight: '5vw' }}
        >
          <Social />
        </span>
        <span className={styles.middle}>
          <Name />
        </span>

        <span
          className={styles.topRight}
          style={{ marginTop: '2%', marginRight: '1%' }}
        >
          <FiMenu
            className={styles.menu_btn}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </span>
      </div>
    </div>
  );
};

export default Home;
