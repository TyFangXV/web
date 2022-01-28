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
      transition={{ duration: 10, ease: 'easeIn' }}
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
      <div className={styles.menu_btn_container}>

        <VerticalBar clip_path={'polygon(0 0, 100% 10%, 100% 100%, 0 calc(100% - 5vw))'} background_image={'url("/store.jpg")'}>
          <span className={Barstyles.alignUp}>  
            <p className={Barstyles.title}>store</p>
          </span>
          <span className={Barstyles.alignBottom}>
            <IoLogoAppleAppstore className={Barstyles.icon} />
          </span>
        </VerticalBar>



        <VerticalBar clip_path={'polygon(0% 10%,100% 0, 100% calc(100% - 5vw), 0  100%)'} background_image={'url("/contact.jpg")'}>
          <span className={Barstyles.alignUp}>    
            <p className={Barstyles.title}>contact</p>
          </span>
          <span className={Barstyles.alignBottom}>
            <MdLocalPhone className={Barstyles.icon} />
          </span>
        </VerticalBar>


        <VerticalBar clip_path={'polygon(0% 0%,100% 0, 100% calc(100% - 5vw), 0  calc(100% - 5vw))'} background_image={'url("/about-us.jpg")'}>
          <span className={Barstyles.alignUp}>    
            <p className={Barstyles.title}>contact</p>
          </span>
          <span className={Barstyles.alignBottom}>
            <MdLocalPhone className={Barstyles.icon} />
          </span>
        </VerticalBar>
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
