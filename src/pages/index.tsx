/* eslint-disable @next/next/no-img-element */
import { Octokit } from '@octokit/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Name, { Age } from '../components/landing/name';
import Social from '../components/landing/social';
import MenuScreen from '../components/menu/menuscreen';
import { LanguageCount } from '../state/lang_stats';
import { isMenuOpen } from '../state/menu';
import styles from '../styles/Home.module.css';
import { IlanguageCount } from '../utils/interfere';

const count = (arr: string[]) => {
  return arr.reduce(
    (prev: any, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
};

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(isMenuOpen);
  const [loading, setLoadingStatus] = useState(true);

  const [languagesCount, setLanguages] = useRecoilState(LanguageCount);
  const forbidden = ['svelte', 'ejs', 'null'];

  let languages: string[] = [];
  console.log(languagesCount);
  
 

  useEffect(() => {
    //preload the site
    setTimeout(() => {
      setLoadingStatus(false);
    }, 1000);

  });

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Image
              src="/Ripple.gif"
              alt="loading"
              width={'100px'}
              height={'100px'}
            />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
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
              style={{ margin: '0 2w 2vw 0' }}
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
            </span>
          </div>
      )}
    </>
  );
};

export default Home;
