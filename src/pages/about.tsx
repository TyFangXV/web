/* eslint-disable @next/next/no-img-element */
import { Octokit } from '@octokit/core';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import LanguageStats from '../components/about/lang-stats';
import styles from '../styles/About.module.css';
import { IlanguageCount, IState } from '../utils/interfere';
import {SiJavascript, SiTypescript, SiPython, SiRust, SiKotlin, SiCsharp} from 'react-icons/si'

const count = (arr: string[]) => {
  return arr.reduce(
    (prev: any, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
};



const mockData = [
  {
    language: 'JavaScript',
    count: 5,
    index: 0,
  },
  {
    language: 'TypeScript',
    count: 4,
    index: 1,
  },
  {
    language: 'HTML',
    count: 3,
    index: 2,
  },
]


const About: NextPage = () => {
  let languages: string[] = [];
  let langauageCount: IlanguageCount[] = [];

  let [statsLoaded, setStatsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        //get my github user stats using octokit
        const octokit = new Octokit();
        const { data } = await octokit.request('GET /users/tyfangxv/repos');

        //map thourgh the repos and get the amount of times a lang is used
        data.map((repo: any) => {
          languages.push(repo.language);

          if (languages.length === data.length) {
            const stats = count(languages);
            Object.entries(stats).map(([key, value]: any, index) => {
              langauageCount.push({
                language: key,
                count: value,
                index: index,
              });
            });
            setStatsLoaded(true);

            console.log(langauageCount);
          }
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
                I'm a front-end developer that knows Typescript and has a level of
                proficiency in Python and C#.
                <br />
                <br />
                I’m keen to learn new things and can work out a solution or fresh
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

            <hr className={styles.cutOff}/>
              <LanguageStats statsLoaded={statsLoaded} LanguageCount={mockData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
