import React, { useEffect } from 'react';
import styles from '../../styles/components/about/lang-stat.module.css';
import { IlanguageCount, IState } from '../../utils/interfere';

const LanguageStats: React.FC<IState> = ({LanguageCount }) => {
  //align the bubbles with the slider
  useEffect(() => {
    LanguageCount.map((lang: IlanguageCount) => {
      const bubble = document.getElementById(`${lang.index}`);
      console.log(lang);
      
      if (bubble) {
        bubble.style.left = `${lang.count * 7}%`;
      }
    });
  });
  return (
    <div className={styles.languageStats}>
      <h1
        className={styles.title}
        style={{ textDecoration: 'underline', paddingBottom: '2vh' }}
      >
        programming languages used in projects
      </h1>
      <div className={styles.languageStatsContainer}>
        <div>
          <div className={styles.languages}>
            <div className={styles.statContainer}>
              {LanguageCount.map((language, index) => (
                <div key={index} className={styles.statsBox}>
                  <p className={styles.title}>{language.language}</p>
                  <div className={styles.circle} id={language.index.toString()}>
                    <span className={styles.percentage}>{language.count * 10 / 10}%</span>
                  </div>
                  <span>
                    0
                    <input
                      type="range"
                      className={styles.stats}
                      value={language.count * 10}
                      max={'100'}
                      onChange={() => {}}
                    />
                    100
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageStats;
