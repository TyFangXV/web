import type { NextPage } from 'next';
import Name, { Age } from '../components/landing/name';
import Social from '../components/landing/social';
import styles from '../styles/Home.module.css';
import { FiMenu } from 'react-icons/fi';
import MenuScreen from '../components/menu/menuscreen';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isMenuOpen } from '../state/menu';
const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(isMenuOpen)
  const [loading, setLoadingStatus] = useState(true);
  let SocialMarginValue = { bottom : "0", right : "0"};

  
  useEffect(() => {
    
    if(window.innerWidth < 490) {
      SocialMarginValue.bottom = "15vw";
      SocialMarginValue.right = "15vw";
    }

    
    setTimeout(() => {
      setLoadingStatus(!loading);
    }, 1000);
  }, []);

  return (
    <>
      {loading ?  (
        <div className={styles.loading}>
          <div className={styles.loading_text}>
            <p>Loading...</p>
          </div>
        </div>
      ): (
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
           <span className={styles.bottomRight} style={{margin : "0 5vw 5vw 0"}}>
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
      )}    
    </>
  );
};

export default Home;
