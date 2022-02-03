import React from 'react';
import styles from '../../styles/components/menu/menuscreen.module.css';
import Barstyles from '../../styles/components/menu/bar.module.css';
import { motion, useAnimation } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { isMenuOpen } from '../../state/menu';
import { useRecoilState } from 'recoil';
import { VerticalBar } from './bars';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { MdLocalPhone}  from 'react-icons/md'
import {FaMap} from 'react-icons/fa'
import {BsPersonCircle, BsLightbulbFill} from 'react-icons/bs'

const isMobile = () => {
  if (window.innerWidth < 480) {
    return true;
  } else {
    return false;
  }
};



const MenuScreen = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(isMenuOpen);
  const startAnimationControls = useAnimation();

  startAnimationControls.start({
    y: menuOpen ? 0 : '-100%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  });

  return (
    <motion.div
      className={styles.container}
      animate={startAnimationControls}
      transition={{ duration: 3, ease: 'easeIn' }}
    >
      <span
        className={styles.topRight}
        style={{ marginTop: '2%', marginRight: '1%' }}
      >
        <FiMenu
          className={styles.menu_btn}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </span>
      <div className={styles.menu_container}>
      <div className={styles.menu_btn_container}>
        <VerticalBar clip_path={'polygon(0 0, 100% 10%, 100% 100%, 0 calc(100% - 5vw))'} background_image={'url("/store.svg")'}>
          <span className={Barstyles.alignUp}>  
            <p className={Barstyles.title}>store</p>
          </span>
          <span className={Barstyles.alignBottom}>
            <IoLogoAppleAppstore className={Barstyles.icon} />
          </span>
        </VerticalBar>



        <VerticalBar clip_path={'polygon(0% 10%,100% 0, 100% calc(100% - 5vw), 0  100%)'} background_image={'url("/contact.svg")'}>
          <span className={Barstyles.alignUp}>    
            <p className={Barstyles.title}>contact</p>
          </span>
          <span className={Barstyles.alignBottom}>
            <MdLocalPhone className={Barstyles.icon} />
          </span>
        </VerticalBar>


        <VerticalBar clip_path={'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0 84%)'} background_image={'url("/about-us.svg")'}>
          <span className={Barstyles.alignUp}>    
            <p className={Barstyles.title}>About<span>&shy;</span>Me</p>
          </span>
          <span className={Barstyles.alignBottom}>
            <BsPersonCircle className={Barstyles.icon} />
          </span>
        </VerticalBar>

      <span className={styles.alignDown}>
          <VerticalBar clip_path={'polygon(0 0, 100% 10%, 100% 100%, 0 calc(100% - 5vw))'} background_image={'url("/road-map.svg")'}>
            <span className={Barstyles.alignUp}>  
              <p className={Barstyles.title}>Road<span>&shy;</span>Map</p>
            </span>
            <span className={Barstyles.alignBottom}>
              <FaMap className={Barstyles.icon} />
            </span>
          </VerticalBar>        
      </span>

      <span className={styles.alignUp}>
          <VerticalBar clip_path={'polygon(0% 10%,100% 0, 100% calc(100% - 5vw), 0  100%)'} background_image={'url("/project.svg")'}>
            <span className={Barstyles.alignUp}>    
              <p className={Barstyles.title}>Project</p>
            </span>
            <span className={Barstyles.alignBottom}>
              <BsLightbulbFill className={Barstyles.icon} />
            </span>
          </VerticalBar>        
      </span>


      </div>
      </div>
    </motion.div>
  );
};

/*

        <div className={styles.menu_btn_container}>
          <RightVerticalBar/>
          <li>sd</li>
          <li>sd</li>
          <li>sd</li>
        </div>
*/

export default MenuScreen;
