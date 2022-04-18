/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import LanguageStats from '../components/about/lang-stats';
import styles from '../styles/About.module.css';
import {SiJavascript, SiTypescript, SiPython, SiRust, SiKotlin, SiCsharp} from 'react-icons/si'
import { useRecoilValue } from 'recoil';
import { LanguageCount } from '../state/lang_stats';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        <div
          style={{ display: 'flex', justifyContent: 'flex-start' }}
          className={styles.box}
        >
          <span className={styles.divider} />
          <p className={styles.heading}>About-me</p>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          className={styles.box}
        >
          <div className={styles.bio}>
          <div style={{width : "65vw"}}>
            <h1 className={styles.text}>Overview</h1>
              <p>I am Drex, a 16-year-old high school tech enthusiast.</p>
              <hr id={styles.id}/>
              <p>
                I&apos;m a front-end developer that knows Typescript and has a level of
                proficiency in Python and C#.
                <br />
                <br />
                I&apos;m keen to learn new things and can work out a solution or fresh
                concept at any moment
                <br />
                <br />
                I am eager to be a member of any team, providing fantastic ideas to
                the team and being skilled at converting a concept into a reality.
                and is always willing to assist anyone in need while seeking
                guidance from others.
                <br />
              </p>             
          </div>
            <hr className={styles.cutOff}/>
            <div className={styles.list}>
                <h1 className={styles.text}>Programming Languages</h1>
                <ul>
                  <li><SiJavascript color='yellow'/> Javascript<span style={{fontStyle : "italic"}}>(well-versed)</span></li>
                  <li><SiTypescript color='darkblue'/> Typescript<span style={{fontStyle : "italic"}}>(intermediate)</span></li>
                  <li><SiPython color='yellow'/> Python<span style={{fontStyle : "italic"}}>(intermediate)</span></li>
                  <li><SiKotlin color='#9600AA'/> Kotlin<span style={{fontStyle : "italic"}}>(Basics)</span></li>
                  <li><SiCsharp color='#F081FF'/> C#<span style={{fontStyle : "italic"}}>(Basics)</span></li>
                  <li><SiRust color='#B7410E'/> Rust<span style={{fontStyle : "italic"}}>(Basics)</span></li>
                </ul>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
