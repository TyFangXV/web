/* eslint-disable @next/next/no-img-element */
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
  let [planeCords, setPlaneCords] = useState(0);
  

  
  
  useEffect(() => {

    setTimeout(() => {
      setLoadingStatus(false);
    }, 3000);



    const planeAnim =  setInterval(() => {
      console.log("fat neek");
      if(!loading){
        clearInterval(planeAnim);
      }
      setPlaneCords(planeCords + 10);
    },1);

  }, []);



  return (
    <>
      {loading ?  (
        <div className={styles.loading}>
          <div>
            <div>
              <div>
              <img src="/clouds.svg" className={styles.cloud}  style={{top : "30%", left : "30%"}} width={"100vw"} height={"100vh"} alt='loading'/>
              <img src="/clouds.svg" className={styles.cloud}  style={{top : "65%", left : "30%"}} width={"100vw"} height={"100vh"} alt='loading'/>
              <img src="/clouds.svg" className={styles.cloud}  style={{top : "65%", left : "75%"}} width={"100vw"} height={"100vh"} alt='loading'/>
              <img src="/clouds.svg" className={styles.cloud}  style={{top : "65%", left : "5%"}} width={"100vw"} height={"100vh"} alt='loading'/> 
              <img src="/clouds.svg" className={styles.cloud}  style={{top : "25%", left : "85%"}} width={"100vw"} height={"100vh"} alt='loading'/> 
              <img src="/clouds.svg" className={styles.cloud}  style={{top : "25%", left : "5%"}} width={"100vw"} height={"100vh"} alt='loading'/>
              </div>
            <img className={styles.loading_image} src="/airplane.svg" style={{left : planeCords}} width={"100"} height={"100vw"} alt='loading'/>
            </div>
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
           <span className={styles.bottomRight} style={{margin : "0 2w 2vw 0"}}>
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
