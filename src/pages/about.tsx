/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import LanguageStats from '../components/about/lang-stats';
import styles from '../styles/About.module.css';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiKotlin,
  SiCsharp,
} from 'react-icons/si';
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
            <div style={{ width: '65vw' }}>
              <h1 className={styles.text}>Overview</h1>
              <p>I am Drex, a 16-year-old high school tech enthusiast.</p>
              <hr id={styles.id} />
              <p>
                I work as a full-stack developer. I'm
                familiar with Typescript. I'm willing to learn new things and
                can come up with a solution or a new concept at any time, and
                I'm excited to be a part of any team, contributing wonderful
                ideas and being skilled at turning a vision into a reality.
                While soliciting advice from others, I am always eager to assist
                anyone in need. I organize hackathons and other events to
                promote and support programming in the UAE. 
                <br/>
                <br/>
                I am expanding my programming skills by investigating various fields in the IT
                business, watching classes, and creating projects based on it to
                understand what I am entering into. When working on a project,
                my significant interest in "Running a Business" plays a key
                role, and I communicate with individuals in that industry to
                deepen my understanding.
              </p>
            </div>
            <hr className={styles.cutOff} />
            <div className={styles.list}>
              <h1 className={styles.text}>Programming Languages</h1>
              <ul>
                <li>
                  <SiJavascript color="yellow" /> Javascript
                  <span style={{ fontStyle: 'italic' }}>(well-versed)</span>
                </li>
                <li>
                  <SiTypescript color="darkblue" /> Typescript
                  <span style={{ fontStyle: 'italic' }}>(intermediate)</span>
                </li>
                <li>
                  <SiPython color="yellow" /> Python
                  <span style={{ fontStyle: 'italic' }}>(intermediate)</span>
                </li>
                <li>
                  <SiKotlin color="#9600AA" /> Kotlin
                  <span style={{ fontStyle: 'italic' }}>(Basics)</span>
                </li>
                <li>
                  <SiCsharp color="#F081FF" /> C#
                  <span style={{ fontStyle: 'italic' }}>(Basics)</span>
                </li>
                <li>
                  <SiRust color="#B7410E" /> Rust
                  <span style={{ fontStyle: 'italic' }}>(Basics)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
